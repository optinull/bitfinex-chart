const CONFIG = {
  AXIS_COLOR: '#333',
  AXIS_TICK_COLOR: '#222',
  AXIS_LABEL_COLOR: '#999',
  AXIS_LABEL_FONT_NAME: 'sans-serif',
  AXIS_LABEL_FONT_SIZE_PX: 12,
  AXIS_LABEL_MARGIN_PX: 10,

  AXIS_X_TICK_COUNT: 12,
  AXIS_Y_TICK_COUNT: 8,
  AXIS_MARGIN_BOTTOM: 50,

  CROSSHAIR_COLOR: '#666',
  MARGIN_BOTTOM: 25,
  MARGIN_RIGHT: 80,
  INDICATOR_LABEL_X: 25,

  TRADE_MARKER_RADIUS_PX: 5,
  TRADE_MARKER_BUY_COLOR: '#0f0',
  TRADE_MARKER_SELL_COLOR: '#f00',

  RISING_CANDLE_FILL: '#16b157',
  RISING_VOL_FILL: 'rgba(9, 69, 34, 0.3)',
  FALLING_CANDLE_FILL: '#f05359',
  FALLING_VOL_FILL: 'rgba(94, 32, 35, 0.3)',

  ZOOM_CANDLE_STEP: 5,
  ZOOM_MIN_LIMIT_CANDLES: 20,
}

const set = (key, value) => {
  CONFIG[key] = value
}

export default CONFIG
export { set }
