const connection = require('./connection')

function readAllAvailable(db = connection) {
  return db('produce_available_months').select()
}

function readOneAvailability(id, db = connection) {
  return db('produce_available_months').select().where('id', id).first()
}

function createAvailability(newAvailability, db = connection) {
  return db('produce').insert(newAvailability)
}

function updateAvailability(updatedAvailability, id, db = connection) {
  return db('produce')
    .update({
      id: updatedAvailability.id,
      month: updatedAvailability.month,
      produce_id: updatedAvailability.produce_id,
    })
    .where('id', id)
}

function deleteAvailability(id, db = connection) {
  return db('produce_available_months').del().where('id', id)
}

// Get all availability with the same month
function readAvailabilityByMonth(month, db = connection) {
  return db('produce_available_months')
    .select()
    .where('month', month)
    .join('produce', 'produce.id', 'produce_available_months.produce_id')
    .select('produce.name', 'produce.display_name', 'produce.image_url')
}

// Get all availability with the same produce_id
function readAvailabilityByProduceId(produce_id, db = connection) {
  return db('produce_available_months')
    .select()
    .where('produce_id', produce_id)
    .join('produce', 'produce.id', 'produce_available_months.produce_id')
    .select('produce.name', 'produce.display_name', 'produce.image_url')
    .select('produce_available_months.month')
    .orderBy('produce_available_months.month')
}

// Get all availability for a season
// Summer is 12, 1, 2
// Autumn is 3, 4, 5
// Winter is 6, 7, 8
// Spring is 9, 10 11
function readAvailabilityBySeason(season, db = connection) {
  switch (season) {
    case 'summer':
      return db('produce_available_months')
        .select()
        .whereIn('month', [12, 1, 2])
        .join('produce', 'produce.id', 'produce_available_months.produce_id')
        .select('produce.name', 'produce.display_name', 'produce.image_url')
    case 'autumn':
      return db('produce_available_months')
        .select()
        .whereIn('month', [3, 4, 5])
        .join('produce', 'produce.id', 'produce_available_months.produce_id')
        .select('produce.name', 'produce.display_name', 'produce.image_url')
    case 'winter':
      return db('produce_available_months')
        .select()
        .whereIn('month', [6, 7, 8])
        .join('produce', 'produce.id', 'produce_available_months.produce_id')
        .select('produce.name', 'produce.display_name', 'produce.image_url')
    case 'spring':
      return db('produce_available_months')
        .select()
        .whereIn('month', [9, 10, 11])
        .join('produce', 'produce.id', 'produce_available_months.produce_id')
        .select('produce.name', 'produce.display_name', 'produce.image_url')
    default:
      return db('produce_available_months')
        .select()
        .join('produce', 'produce.id', 'produce_available_months.produce_id')
        .select('produce.name', 'produce.display_name', 'produce.image_url')
  }
}

module.exports = {
  readAllAvailable,
  readOneAvailability,
  createAvailability,
  updateAvailability,
  deleteAvailability,
  readAvailabilityByMonth,
  readAvailabilityByProduceId,
  readAvailabilityBySeason,
}
