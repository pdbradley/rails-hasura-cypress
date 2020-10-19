require 'rails_helper'

RSpec.describe Cat, type: :model do
  it "exists and can be created" do
    cat = Cat.create(name: 'Fluffy', breed: 'Siamese')

    expect(cat.name).to eq 'Fluffy'
    expect(cat.breed).to eq 'Siamese'
  end
end
