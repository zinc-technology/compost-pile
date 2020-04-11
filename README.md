# Compost Pile

Excess Capital is Waste. Compost it.

We take excess capital and turn it into fertilizer, which we distribute to
members of under-capitalized communities through no-strings-attached microloans
and paid apprenticeships.

## Contributing

Compost Pile is a kinda-but-not-really tongue-in-cheek side project.
Contributions are _welcome and appreciated_, but I am unlikely to take the time
to optimize for collaboration unless this takes off. You can see more in
[CONTRIBUTING.md][contributing].

That said, I'll have CI running tests and the documentation I feel like writing,
but that's about it.

## Design

Composters subscribe to dump some of their ~~money~~ ~~shit~~ waste into the
Compost Pile every month. It ferments for ~6 months, during which the Composter
may request a refund, which will be granted with no questions asked. Once six
months have passed, the waste is now fertilizer.

Fertilizer is distributed to members of under-capitalized communities through
no-strings attached microloans or paid software apprenticeships through
[ZTI][zti-twitter].

[zti-twitter]: https://twitter.com/ZincTechnology

## Architecture

There are two modules that make up Compost Pile: [`api`][api] and [`www`][www].

- [`api`][api] is a Ruby on Rails backend for processing the payment
  information, handling form submissions, exposing raw data for accountability
  purposes, etc.
- [`www`][www] is a static site/component library that provides the stripe
  payment form, call to action, accountability data, etc.

[api]: ./api/
[www]: ./www/

### Dependencies

Compost Pile depends on the following programs which must be installed manually:

- PostgreSQL (We recommend [Postgres.app][postgres-app] for macOS)
- Redis (We recommend [Homebrew to install Redis][homebrew-redis])
- (we recommend using a language manager like [asdf][asdf], [rbenv][rbenv], or
  [nodenv][nodenv])
  - Ruby 2.7 (We recommend [rbenv][rbenv] or [asdf][asdf])
  - Node 12.16 (We recommend [nodenv][nodenv] or [asdf][asdf])

[postgres-app]: https://postgresapp.com/
[homebrew-redis]: https://formulae.brew.sh/formula/redis
[rbenv]: https://github.com/rbenv/rbenv
[nodenv]: https://github.com/nodenv/nodenv
[asdf]: https://asdf-vm.com/#/

## License

Compost Pile is licensed under the [Prosperity Public
License][prosperity-license]. See [LICENSE.md][license] for more details.

In order to use it and accept payments, you must acquire a license. Early access
pricing is \$500 and grants you usage rights (but not sub-licensing rights) for
all releases up to, but not including 2.0.

Price is negotiable. Acquire a license by emailing [hello@zincma.de](mailto:
hello@zincma.de).

[contributing]: ./CONTRIBUTING.md
[license]: ./LICENSE.md
[prosperity-license]: https://prosperitylicense.com/
