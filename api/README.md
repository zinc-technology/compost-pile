# Compost Pile/API

Compost Pile/API provides a secure mechanism for tracking payment information, exposing data for accountability purposes,

For the moment, this is a pretty thin wrapper around [Compensated][compensated-source]. I am hoping to include features like automated refund approval, payment history, and similar things.

## Contributing

See [Compost Pile's Development Guide][contributing-development].

### Running the API

We recommend using [Hivemind][hivemind] or [Overmind] to run the API server from [Compost Pile project root][compost-pile-root]. This will ensure that the web frontend is also running.

### Running the tests

Run tests by executing `bin/test` from within the [Compost Pile project root][compost-pile-root].

While [there are no rails/ruby specific tests at this time][you-will-be], there will be.

## License

The Compost Pile API is licensed under [the Prosperity Public License][license]



[you-will-be]: https://www.youtube.com/watch?v=g57LxM-GcSc

[contributing-development]: ../CONTRIBUTING.md#development-guide
[compensated-source]: https://github.com/zinc-collective/compensated/

[hivemind]: https://github.com/DarthSim/hivemind
[overmind]: https://github.com/DarthSim/overmind
[compost-pile-root]: ../
[compost-pile-api-root]: ./
[license]: ../LICENSE.md