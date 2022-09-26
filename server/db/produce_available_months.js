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

function readAvailabilityForMonth(month, db = connection) {
  return db('produce_available_months')
    .select()
    .where('month', month)
    .join('produce', 'produce.id', 'produce_available_months.produce_id')
    .select('produce.name', 'produce.display_name', 'produce.image_url')
}

function readAvailabilityForProduceId(produce_id, db = connection) {
  return db('produce_available_months')
    .select()
    .where('produce_id', produce_id)
    .join('produce', 'produce.id', 'produce_available_months.produce_id')
    .select('produce.name', 'produce.display_name', 'produce.image_url')
    .select('produce_available_months.month')
    .orderBy('produce_available_months.month')
}

function readAvailabilityByMonths(months, db = connection) {
  return db('produce_available_months')
    .select()
    .whereIn('month', months)
    .join('produce', 'produce.id', 'produce_available_months.produce_id')
    .select('produce.name', 'produce.display_name', 'produce.image_url')
}

function readAvailabilityBySeason(season) {
  switch (season) {
    case 'summer':
      return readAvailabilityByMonths([12, 1, 2])
    case 'autumn':
      return readAvailabilityByMonths([3, 4, 5])
    case 'winter':
      return readAvailabilityByMonths([6, 7, 8])
    case 'spring':
      return readAvailabilityByMonths([9, 10, 11])
    default:
      return readAvailabilityByMonths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  }
}

module.exports = {
  readAllAvailable,
  readOneAvailability,
  createAvailability,
  updateAvailability,
  deleteAvailability,
  readAvailabilityForMonth,
  readAvailabilityForProduceId,
  readAvailabilityByMonths,
  readAvailabilityBySeason,
}
