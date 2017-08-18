import { augur } from 'services/augurjs';
import { insertOrderBookChunkToOrderBook } from 'modules/bids-asks/actions/insert-order-book-chunk-to-order-book';
import logError from 'utils/log-error';

export const loadOneOutcomeBidsOrAsks = (marketID, outcome, orderType, callback = logError) => (dispatch, getState) => {
  if (marketID == null || outcome == null || orderType == null) {
    return callback(`must specify market ID, outcome, and order type: ${marketID} ${outcome} ${orderType}`);
  }
  const market = getState().marketsData[marketID];
  if (!market) {
    return callback(`market ${marketID} data not available`);
  }
  if (market.minPrice == null || market.maxPrice == null) {
    return callback(`minPrice and maxPrice not found for market ${marketID}`);
  }
  augur.api.Orders.getBestOrderId({
    _type: orderType,
    _market: marketID,
    _outcome: outcome
  }, (bestOrderId) => {
    if (!bestOrderId || bestOrderId.error) {
      return callback(bestOrderId || `best order ID not found for market ${marketID}`);
    }
    augur.trading.orderBook.getOrderBookChunked({
      _type: orderType,
      _market: marketID,
      _outcome: outcome,
      _startingOrderId: bestOrderId,
      _numOrdersToLoad: null,
      minPrice: market.minPrice,
      maxPrice: market.maxPrice
    }, orderBookChunk => dispatch(insertOrderBookChunkToOrderBook(marketID, orderBookChunk)), (orderBook) => {
      console.log('order book loaded for outcome', outcome, 'type', orderType);
      if (!orderBook || orderBook.error) {
        return callback(orderBook || `outcome order book not loaded for market ${marketID}`);
      }
      callback(null);
    });
  });
};