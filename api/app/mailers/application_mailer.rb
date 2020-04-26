# frozen_string_literal: true

# Parent class for our email classes
# @see https://github.com/rails/rails/pull/6747#issuecomment-6369876 Origin of the ApplicationMailer
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
