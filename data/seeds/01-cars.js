
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Toyota', model: 'Prius', VIN: 'JH4KA3170LC006787', mileage: 154999, title: 'rebuilt', transmission: 'automatic'},
        {make: 'Volvo', model: 'S60', VIN: 'JH4KA3170LC006754', mileage: 84231, title: 'clean', transmission: 'automatic', color: 'gold'},
        {make: 'Lada', model: '2106', VIN: 'SCAZD00A6MCX30611', mileage: 63256, title: 'clean', transmission: 'manual', color: 'blue'}
      ]);
    });
};
