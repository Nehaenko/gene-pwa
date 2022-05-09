yarn concurrently \
  --kill-others-on-fail \
  --prefix "[{name}]" \
  --names "lint,prettier:check" \
  --prefix-colors "bgGreen.bold.white,bgGreen.bold.white" \
    "yarn run lint" \
    "yarn run prettier:check"
