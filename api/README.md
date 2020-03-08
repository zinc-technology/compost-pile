# Shithole/API

Shithole/API provides a secure mechanism for tracking payment information, exposing data for accountability purposes,

For the moment, this is a pretty thin wrapper around [Compensated][compensated-source]. I am hoping to include features like automated refund approval, payment history, and similar things.

## Contributing

See [Shithole's Development Guide][contributing-development].

### Running the API

We recommend using [Hivemind][hivemind] or [Overmind] to run the API server from [Shithole project root][shithole-root]. This will ensure that the web frontend is also running.

### Running the tests

Run tests by executing `bin/test` from within the [Shithole project root][shithole-root].

While [there are no rails/ruby specific tests at this time][you-will-be], there will be.

## License

The Shithole API is licensed under [the Prosperity Public License][license]



[you-will-be]: https://www.youtube.com/watch?v=g57LxM-GcSc

[contributing-development]: ../CONTRIBUTING.md#development-guide
[compensated-source]: https://github.com/zinc-collective/compensated/

[hivemind]: https://github.com/DarthSim/hivemind
[overmind]: https://github.com/DarthSim/overmind
[shithole-root]: ../
[shithole-api-root]: ./
[license]: ../LICENSE.md