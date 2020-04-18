# Root of the object graph for a particular funding initiative.
# Each compost pile can have deposits made against it
# and maintains an up-to-date representation of the
# money that is currently at which stage in the composting
# process
class CompostPile < ApplicationRecord
  # Money that is still able to be refunded, because we
  # want folks to be able to pull out if they have a
  # change in financial circumstances.
  monetize :composting_cents

  # Money that is available to be distributed by whoever
  # is managing the compost pile's funds.
  monetize :available_cents

  # Money that is "at work" and has been distributed
  # into mutual benefit organizations or unconditional
  # mutual aid payments.
  monetize :distributed_cents

  # Money that has done its job and been returned to
  # the compost pile.
  monetize :returned_cents
end
