# frozen_string_literal: true

# Parent class for Database backed Models
# @see https://github.com/rails/rails/pull/22567 PR Adding ApplicationRecord
# @see https://blog.bigbinary.com/2015/12/28/application-record-in-rails-5.html
#        Introduction blogpost for ApplicationRecord
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
