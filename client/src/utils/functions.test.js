import {
  sortParticipantsBySomeValue,
  sortEventsByDate,
  checkIfUserIsSelectedOrNot,
  formatDate,
  addTimeToADate,
  stringifyDate,
  getParticipantsByStatus
} from "./functions";

describe("sort participants", () => {
  test("should sort by surname", () => {
    const valueToSortBy = "secondName";
    const arrayToSort = [
      { firstName: "Andrea", secondName: "Scorcia" },
      { firstName: "Pino", secondName: "Anca" },
      { firstName: "Giorgio", secondName: "Giorgi" }
    ];
    const result = sortParticipantsBySomeValue(valueToSortBy, arrayToSort);
    expect(result[0].secondName).toBe("Anca");
    expect(result[2].secondName).toBe("Scorcia");
  });

  test("should sort by status", () => {
    const valueToSortBy = "registrationStatus";
    const arrayToSort = [
      { firstName: "Andrea", registrationStatus: "spam" },
      { firstName: "Pino", registrationStatus: "pending" },
      { firstName: "Giorgio", registrationStatus: "confirmed" },
      { firstName: "Gino", registrationStatus: "rejected" }
    ];
    const result = sortParticipantsBySomeValue(valueToSortBy, arrayToSort);
    expect(result[0].registrationStatus).toBe("pending");
    expect(result[1].registrationStatus).toBe("confirmed");
    expect(result[2].registrationStatus).toBe("rejected");
    expect(result[3].registrationStatus).toBe("spam");
  });
})

describe("sortEventsByDate", () => {
  it("should sort events by their date", () => {
    const arrayToSort = [
      { eventName: "One", date: "2020-03-10T00:00:00.000+00:00" },
      { eventName: "Two", date: "2020-01-10T00:00:00.000+00:00" },
      { eventName: "Three", date: "2019-03-10T00:00:00.000+00:00" },
      { eventName: "Four", date: "2020-09-10T00:00:00.000+00:00" }
    ];

    const result = sortEventsByDate(arrayToSort);
    expect(result[0].date).toBe("2019-03-10T00:00:00.000+00:00");
    expect(result[1].date).toBe("2020-01-10T00:00:00.000+00:00");
    expect(result[2].date).toBe("2020-03-10T00:00:00.000+00:00");
    expect(result[3].date).toBe("2020-09-10T00:00:00.000+00:00");
  })
});

describe("getParticipantsByStatus", () => {
  it("should filter users by status", () => {
    const participants = {
      participantsRegistered: [
        { firstName: "Andrea", registrationStatus: "spam" },
        { firstName: "Pino", registrationStatus: "pending" },
        { firstName: "Giorgio", registrationStatus: "confirmed" },
        { firstName: "Gino", registrationStatus: "rejected" }
      ]
    };
    const result = getParticipantsByStatus(participants, "pending");
    expect(result).toHaveLength(1);
    expect(result[0].registrationStatus).toBe("pending");
  }) 
});

describe("checkIfUserIsSelectedOrNot", () => {
  const startingArray = [
    { firstName: "Andrea", _id: "12345" },
    { firstName: "Pino", _id: "54321" },
    { firstName: "Giorgio", _id: "76543" },
    { firstName: "Gino", _id: "09876" }
  ];

  it("should remove user form the selected ones if he is already present", () => {
    const userToCheck = { firstName: "Andrea", _id: "12345" };
    const result = checkIfUserIsSelectedOrNot(userToCheck, startingArray);

    expect(result).not.toContainEqual(userToCheck);
  });

  it("should add participant if not present", () => {
    const userToAdd = { firstName: "Franco", _id: "19821" };
    const result = checkIfUserIsSelectedOrNot(userToAdd, startingArray);
    expect(result).toHaveLength(5);
    expect(result).toContainEqual(userToAdd);
  })
});

describe("formatDate", () => {
  it("should return a date formatted day/month/short year", () => {
    const result = formatDate("2020-03-10T00:00:00.000+00:00");
    expect(result).toBe("10/03/20");
  })
})

describe("addTimeToADate", () => {
  test("it should add the time of event start to a midnight date", () => {
    const result = addTimeToADate("2020-03-10T00:00:00.000+00:00", "10:00");
    expect(result).toBe("20200310T100000+01:00");
  })
});

describe("stringifyDate", () => {
  test("should render a string date", () => {
    const result = stringifyDate("2020-03-10T00:00:00.000+00:00");
    expect(result).toBe("Tuesday 10 March 2020");
  })
});