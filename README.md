# React-Rails Demo Application

This repo is an example of a simple working Rails 5, Webpack(er)3, React-Rails 2.3+ application.

Where generators are used, the git commit will be the command ran to get to the current application state so it will hopefully be easy to follow along at home.

## Branches

This repo contains two trees, one Webpacker and one Sprockets.

Each branch illustrates a react-rails ability.

* [`master`](https://github.com/BookOfGreg/react-rails-example-app) -> Webpacker 3
* [`sprockets`](https://github.com/BookOfGreg/react-rails-example-app/tree/sprockets) -> Sprockets 3
* [`rails-production-version`](https://github.com/BookOfGreg/react-rails-example-app/compare/sprockets...rails-production-version?expand=1) -> Sprockets 3 + serving production prebundled react
* [`rails-assets-sprockets`](https://github.com/BookOfGreg/react-rails-example-app/compare/sprockets...rails-assets-sprockets?expand=1) -> Sprockets 3 + using Rails-Assets.org (failed)
* [`generate-new-component`](https://github.com/BookOfGreg/react-rails-example-app/compare/master...generate-new-component?expand=1) -> Webpacker 3 + new style component
* [`without-ujs`](https://github.com/BookOfGreg/react-rails-example-app/compare/master...without-ujs?expand=1) -> Sprockets 3 + removing UJS and making component globally accessible
* [`jsx-file-example`](https://github.com/BookOfGreg/react-rails-example-app/compare/master...jsx-file-example?expand=1) -> Webpacker 3 + file named .JSX
* [`coffeescript-example`](https://github.com/BookOfGreg/react-rails-example-app/compare/master...coffeescript-example?expand=1) -> Webpacker 3 + Coffeescript WITH JSX
