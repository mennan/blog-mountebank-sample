const userStubs = [
  {
    predicates: [
      {
        equals: {
          method: "GET",
          path: "/users",
        },
      },
    ],
    responses: [
      {
        is: {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            success: true,
            data: [
              {
                id: "8F11AD71-D7E7-45EF-AF9E-D54EF0675C77",
                name: "Mennan",
                surname: "Köse",
              },
              {
                id: "36DDB739-7541-466D-898E-848F65C9323D",
                name: "Anıl",
                surname: "Atalay",
              },
            ],
          }),
        },
      },
    ],
  },
  {
    predicates: [
      {
        equals: {
          method: "POST",
          path: "/users/8006A836-FB25-4801-BB71-57C9E6A05065",
        },
      },
    ],
    responses: [
      {
        is: {
          statusCode: 404,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            success: false,
            data: null,
            message: "User not found!",
          }),
        },
      },
    ],
  },
];

module.exports = userStubs;
