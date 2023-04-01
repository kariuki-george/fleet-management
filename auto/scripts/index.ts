// import Chance from "chance";

// const chance = new Chance();

// // Generate data
// const gen = () => {
//     // Drivers
//     const drivers = [];
//     for (let count = 0; count < 100; count++) {
//       drivers.push({
//         driverId: chance.guid(),
//         driverName: chance.name(),
//         carId: chance.guid(),
//       });
//     }
//     console.log(drivers);
//     Routes
//     const routes = [];
//     for (let count = 0; count < 30; count++) {
//       routes.push({
//         routeId: chance.guid(),
//         amount: chance.dollar({ max: 200, min: 50 }).slice(1),
//         start: chance.city(),
//         dest: chance.city(),
//       });
//     }
//     console.log(routes);
// };

// gen();

export const cars = [
  {
    driverId: "f50d1c57-0da6-5492-bd57-d435167237a0",
    driverName: "Ella Smith",
    carId: "80af45d2-9066-5a72-b2fb-4b23cdba18b1",
  },
  {
    driverId: "61bd843e-293e-5098-9493-bad347de67ad",
    driverName: "Sallie Robbins",
    carId: "02aa1e66-b3f9-5a4d-a33b-4ae0d2f96554",
  },
  {
    driverId: "e2c6e3fe-d4f5-517d-b289-9f2209b5f089",
    driverName: "Caroline Ross",
    carId: "43253913-df34-5de9-bd40-88f30ecfd02b",
  },
  {
    driverId: "9d77a49a-bfc4-5066-bc65-0fa762121a2f",
    driverName: "Susie Perry",
    carId: "fcf710fc-e803-552b-92a0-461191ad2971",
  },
  {
    driverId: "ac2a16e3-3067-5f06-983e-9351e9671430",
    driverName: "Dale Patton",
    carId: "d29457a2-36b9-5c73-937f-2f8a7714eaf9",
  },
  {
    driverId: "204769f6-4806-5fcf-93aa-2624d15dea84",
    driverName: "Ola Rodriquez",
    carId: "75678bc7-ea6a-50af-b7c9-e1b30d43886b",
  },
  {
    driverId: "a8171f4a-86a9-5c5b-9705-e7875130acf3",
    driverName: "Jared Beck",
    carId: "0d069346-7dcd-5be0-9c46-764b7bedf75d",
  },
  {
    driverId: "1edafb7a-6d49-59eb-823c-f8055e55c748",
    driverName: "Don Beck",
    carId: "f0633740-65df-5599-9839-981f659641a7",
  },
  {
    driverId: "383a1e16-fe3d-571e-b321-93ad1550a1a2",
    driverName: "Gregory Phelps",
    carId: "46bdafac-22b2-58d6-a83f-c654d5d39bea",
  },
  {
    driverId: "2ba9a996-8e91-5156-98e1-8b218118a923",
    driverName: "Marc French",
    carId: "eb93ccde-f1f7-58ee-9971-c66de16a9597",
  },
  {
    driverId: "c98e2918-09ae-5734-9141-14287b561ec4",
    driverName: "Jayden Hogan",
    carId: "4836e7c5-22d3-5ace-852b-4d66221f7348",
  },
  {
    driverId: "3d4844b1-ebae-55d5-a0bb-19c5f9ca606c",
    driverName: "Michael Burton",
    carId: "08cef179-15c2-5aba-92a9-cde1e9875725",
  },
  {
    driverId: "6ef847c3-edb6-5ed2-b8b3-b64b81bd3e24",
    driverName: "Irene White",
    carId: "0db8fb75-fab4-5f86-8263-c6169cfda017",
  },
  {
    driverId: "e09927bc-83f0-50b5-bd0c-64556de38472",
    driverName: "Addie Mills",
    carId: "c47b786d-eaee-5717-8910-e10e968bacb5",
  },
  {
    driverId: "fd00aabf-7f06-5adb-87db-f2d6934a7551",
    driverName: "Johnny Brock",
    carId: "40ca50b4-86c6-538f-a24d-5eb56a78dd1a",
  },
  {
    driverId: "a10c0cdb-bedd-5123-8cc7-5259543e3d88",
    driverName: "Verna Bryan",
    carId: "20180ef8-123b-5509-90a6-3795cbcea1a4",
  },
  {
    driverId: "52c9400d-505f-5bd5-b6a5-4aecd557370e",
    driverName: "Roger Carr",
    carId: "6a063a9c-23f6-5ce5-b833-06d7c1688858",
  },
  {
    driverId: "249d04a7-8f6d-5c06-9e36-aaea6fd58269",
    driverName: "Lucille Reed",
    carId: "44b928fe-3d8c-54dd-8166-fcbad94b8b2a",
  },
  {
    driverId: "54eec0da-93ed-563d-87af-a52f7e769f43",
    driverName: "Lester Reyes",
    carId: "79754883-4d87-5664-8b95-ccda138ed3e8",
  },
  {
    driverId: "d1506ee3-99f1-54ca-9ac9-3c4caf572e99",
    driverName: "Matthew Quinn",
    carId: "b9f6874b-0a28-5a73-8f7c-67d42c2750c4",
  },
  {
    driverId: "4d8255d8-525b-5d5d-89dd-2fe304dc94b7",
    driverName: "Steven Jacobs",
    carId: "a500558a-80c2-51a7-87ba-732f798947ca",
  },
  {
    driverId: "461b5d49-1f98-5235-8105-d32074e31fc6",
    driverName: "Scott Jennings",
    carId: "1c2ba9b6-1760-5afe-b383-8159c5528dd3",
  },
  {
    driverId: "4e9cc585-1d25-52cd-8cd7-7ccc12f5811f",
    driverName: "Garrett Mullins",
    carId: "245010f4-37f5-582a-b942-3520c97d0d3d",
  },
  {
    driverId: "b0bc1d55-4fcf-5d6d-b96d-3cc037eaab78",
    driverName: "Joseph Ingram",
    carId: "7d807ed5-b478-58b3-9814-c8f29ecba883",
  },
  {
    driverId: "328c8fe9-a8d3-5f76-ab60-33b2a1f0dfa0",
    driverName: "Minerva Torres",
    carId: "84857101-939e-5783-84af-15214f336777",
  },
  {
    driverId: "5ac65860-fbd0-5759-9134-0be8aedbb5ef",
    driverName: "Mae Copeland",
    carId: "c1fce3aa-2edc-5554-b3a3-e964d229b28a",
  },
  {
    driverId: "24ec8bfb-65da-5930-af79-4780d7cc5c38",
    driverName: "Eliza Lopez",
    carId: "c12cd464-83a6-58a8-8f45-e6488b65c51c",
  },
  {
    driverId: "d7fdc37c-05b4-5336-b128-686a65a7f813",
    driverName: "Nelle Bush",
    carId: "5aff460e-3af3-5070-961b-78ed756e64ce",
  },
  {
    driverId: "d89ed9ee-5a5b-5ba8-b65f-707f94e95ea0",
    driverName: "Nicholas Tyler",
    carId: "7b846a08-e2cc-5721-b829-7f33d5aad991",
  },
  {
    driverId: "1965d074-e209-5962-aeee-80ae6c61fc11",
    driverName: "Jack Fuller",
    carId: "b886582b-bac5-5f42-832f-4d382cb5ffac",
  },
  {
    driverId: "8095dbae-842e-58d4-8cd4-8e62c9409b16",
    driverName: "Edith Little",
    carId: "5aa68cf1-6557-524a-a369-c2feb61e05a1",
  },
  {
    driverId: "b5fda204-36de-5513-bbba-4665d0a45723",
    driverName: "Sadie Terry",
    carId: "44feaddc-255c-54c8-badb-e0d04648ca28",
  },
  {
    driverId: "d35d2737-9638-5615-96a3-c5c8cb9fbef2",
    driverName: "Lucinda Tran",
    carId: "6acdeaea-3816-5afc-a61b-ce7922b8778b",
  },
  {
    driverId: "529a6f59-f307-53a4-b4fb-eee80ef62cca",
    driverName: "Kevin Mitchell",
    carId: "24cbc234-0532-522c-9e35-8b84deeda367",
  },
  {
    driverId: "f89febc5-aaf9-5b3d-bd50-5b23716814bf",
    driverName: "Jayden Nash",
    carId: "5c124524-bed4-51cf-861e-ea510ae88b85",
  },
  {
    driverId: "51f5d120-fb23-5f9c-82ac-7a1609b6aa93",
    driverName: "Justin Ingram",
    carId: "004a2e4c-7a42-5c79-b74d-0588d64e04d8",
  },
  {
    driverId: "088dbb27-3110-5ab6-bd39-0bd86e46d2f6",
    driverName: "Cory Vega",
    carId: "f9dd639b-63f8-5873-96ff-a6c862c96db2",
  },
  {
    driverId: "57a71ce3-ff60-5b70-acd2-8d908f841c73",
    driverName: "Alice Wong",
    carId: "57b55f8c-b202-5259-ad31-aa91e40b2c68",
  },
  {
    driverId: "1a09c183-9075-5a24-a504-e41b72df1857",
    driverName: "Jay Harmon",
    carId: "1a7a1550-947e-54c7-aebf-fc9bc1ba1e34",
  },
  {
    driverId: "7b87fd4c-54df-54e5-94d6-86876b9e9a84",
    driverName: "Francis Warren",
    carId: "11f2f8a7-7e0e-55df-9e3a-78d541d06767",
  },
  {
    driverId: "3c30e067-9e55-5cbb-b34b-9a5608b233cc",
    driverName: "Norman Page",
    carId: "1e864fc0-82bd-555f-960a-35ab2bbbc128",
  },
  {
    driverId: "51d7814c-8b67-5d6c-a8df-e4a24ec30f2e",
    driverName: "Henry Quinn",
    carId: "cfcf6043-d21c-5966-94a6-6e91f923a9e6",
  },
  {
    driverId: "7b926ec3-3b35-5326-bc74-73d1ba5e88b4",
    driverName: "Cordelia Guzman",
    carId: "13350544-ff8e-553b-afc7-3273f59b610f",
  },
  {
    driverId: "e8282660-3e0f-54fe-b0de-c62a4b389488",
    driverName: "Leroy Schmidt",
    carId: "87f7e48e-e64a-5bca-bf9a-41a3e0558c64",
  },
  {
    driverId: "693f2265-dcad-57aa-aa6e-4cff30c14f36",
    driverName: "Howard Lambert",
    carId: "677dca0d-10df-5b51-b150-c7e024ed855c",
  },
  {
    driverId: "84c26636-e87c-52c8-871c-259078b2d93a",
    driverName: "Alice Freeman",
    carId: "5c22434c-bce0-5eed-bd21-85f362671f80",
  },
  {
    driverId: "c6b00f8f-f48d-5107-bc85-659fe2db240a",
    driverName: "Kyle Bush",
    carId: "8b9f51aa-a161-5abc-9a67-5df6eaeb59d8",
  },
  {
    driverId: "58d82d19-8787-5aa0-b69a-b52f76b089bc",
    driverName: "Ola Dawson",
    carId: "290d2cfe-eeb8-5b92-93c9-67f726b8df85",
  },
  {
    driverId: "a17722a9-4262-5d3d-9bdb-679a537318b4",
    driverName: "Irene Stewart",
    carId: "bd41bb87-e925-5375-a4f8-9f0949647b7d",
  },
  {
    driverId: "a898de10-969f-5856-b3ec-4a42592c6642",
    driverName: "Daisy Parker",
    carId: "eab8aae5-abb6-543e-abe0-f597d8485c5a",
  },
  {
    driverId: "32e4d34f-69d5-5093-9609-0384984fd484",
    driverName: "Amy Vaughn",
    carId: "6461918e-bb5a-58bb-8c60-d023140634c5",
  },
  {
    driverId: "bbf14361-52e0-5d7b-bd54-bf6cd75bd0cf",
    driverName: "Nettie Stevenson",
    carId: "a20b5453-2966-59db-9cf3-a42f5466ab94",
  },
  {
    driverId: "f95f2ae4-1762-5b1a-9075-41cce3e8d08d",
    driverName: "Eugenia Rodriguez",
    carId: "bb393de5-2a4d-5d27-9b58-4cb874946193",
  },
  {
    driverId: "4679be04-8d8d-5e74-8d26-82542c857fdc",
    driverName: "Cynthia Palmer",
    carId: "975ea068-5a37-5360-9dcd-8ad8f9b7bdf3",
  },
  {
    driverId: "84626c6a-3a9d-58f3-8887-d87bb858b7f6",
    driverName: "Samuel Jacobs",
    carId: "9bbf90b6-334d-5205-8077-7ccfb70b0b9a",
  },
  {
    driverId: "179a88ce-4bda-5265-9c23-5d03912d4d32",
    driverName: "Oscar Burke",
    carId: "b8e46095-0d84-55d2-9040-651718b18f3a",
  },
  {
    driverId: "29998a8a-52aa-567f-9f0b-0b0b28a7d1e3",
    driverName: "Luis Webb",
    carId: "3c11adb4-708b-57c8-9c75-c3767e523d08",
  },
  {
    driverId: "cd785d34-8cad-59f3-bf70-f5844b5727d7",
    driverName: "Isaac Reyes",
    carId: "0ce169a5-9782-5fbf-88f4-09f3b6fbdbee",
  },
  {
    driverId: "fbb9f5dd-67e2-5db1-a117-6e139652a3bf",
    driverName: "Jordan Fowler",
    carId: "4db34e97-8681-5d9c-8a2c-233fe79e708c",
  },
  {
    driverId: "cfb255bc-fbf6-5b67-a50a-bfdb0045348f",
    driverName: "Virgie Brown",
    carId: "0ed638a2-5a3e-5c81-88ad-4b59814ab8d1",
  },
  {
    driverId: "07a406a5-76ec-59b9-bc47-77e3afeafeb0",
    driverName: "Edward McCoy",
    carId: "97693889-86fa-5f0f-a2e2-8355289a1ba8",
  },
  {
    driverId: "6802ba9c-72c9-57cb-9959-5e18ec5378fd",
    driverName: "Alan Pena",
    carId: "ef15f837-116d-5595-87a9-7e3518a0ab2c",
  },
  {
    driverId: "dac6a9d0-4fd2-5b21-9b87-060f3fca8a76",
    driverName: "Irene Larson",
    carId: "e1c28f62-24dd-5fc1-8c42-3953080d431c",
  },
  {
    driverId: "2d4dc20e-af14-568e-82a7-bd8ea0a8506e",
    driverName: "Chad Cox",
    carId: "1616797b-5018-5f1f-90bf-72bd865c3e77",
  },
  {
    driverId: "1e7479f4-14b6-50d5-93bd-2daf1ede2318",
    driverName: "Claudia Hines",
    carId: "0eb1f69e-0161-504b-94c3-f8926f131c3d",
  },
  {
    driverId: "7dda4582-dee0-5b13-a008-4774f08fbb21",
    driverName: "Jesse Cooper",
    carId: "e4ed8482-c299-5ffc-a038-5fbc04ad567f",
  },
  {
    driverId: "a209b9ea-0908-5225-ac42-41603a55f03e",
    driverName: "Harriet Barrett",
    carId: "9310b126-72ec-54dc-8c94-c49db47f25a1",
  },
  {
    driverId: "13f83237-0e66-55f0-98fc-0bb7227f8411",
    driverName: "Ada Francis",
    carId: "3994b38f-500a-589f-bab9-e61a9d205811",
  },
  {
    driverId: "d1674cb0-102f-5898-877b-2e3673473d73",
    driverName: "Rosalie Mason",
    carId: "2496c194-9d4a-56e1-b4bd-90416126d6a5",
  },
  {
    driverId: "d627e2c1-829e-5f0f-b136-8bc82b01f1cd",
    driverName: "Rachel Stanley",
    carId: "4cf7b4dc-f965-5132-8293-341ec71fa24d",
  },
  {
    driverId: "e59c92c6-3d31-5c5f-bfae-862a8530f0c3",
    driverName: "Harold Osborne",
    carId: "5f1b9274-ff72-50a4-ae0b-771269bab70b",
  },
  {
    driverId: "8e345a3b-dd65-50ec-a1c2-726f5a9972f6",
    driverName: "Inez Morris",
    carId: "19328f40-f903-53df-bca2-67118765888a",
  },
  {
    driverId: "2582132c-af0a-5bd5-9922-46fc5d19e28e",
    driverName: "Maude Richards",
    carId: "f89983c0-22cd-5097-b27b-a7045d1df815",
  },
  {
    driverId: "4926c498-e935-5e81-8073-ea9da73f32b4",
    driverName: "Dollie Howard",
    carId: "3c50116b-25d3-5ce1-ae80-eadbfa9bbbe9",
  },
  {
    driverId: "404b67b6-951e-5e65-bb76-c9243a213bff",
    driverName: "Eddie Dean",
    carId: "e52b7bdf-4229-51f8-a52a-01a1ddd50d8d",
  },
  {
    driverId: "f611ce12-559a-540b-bcc5-3ee0497bc31d",
    driverName: "Rosetta Ortiz",
    carId: "90d464fe-9c7f-5ddb-8467-a3accdfdfabf",
  },
  {
    driverId: "43aa972c-11be-5942-81e4-12fc3a8fdf02",
    driverName: "Hilda Lynch",
    carId: "9780cb74-c436-5da7-9022-cf64d0ecc84c",
  },
  {
    driverId: "b39fb336-fdf6-5709-a639-4385daccf3be",
    driverName: "Marc Colon",
    carId: "d727640b-89df-5644-a915-86464e8644dd",
  },
  {
    driverId: "44c94f7b-1a75-51a6-b48e-873c76280327",
    driverName: "Mathilda Andrews",
    carId: "f8a2ba72-e864-5a85-9b68-17d591eb7329",
  },
  {
    driverId: "daadd023-1926-53ae-9269-3dc1209d1eab",
    driverName: "Katie Tucker",
    carId: "4ccd334c-0bcb-594b-9530-d71a89bb1657",
  },
  {
    driverId: "af085cbd-9772-5e53-9cb8-8298b3445a80",
    driverName: "Olivia Elliott",
    carId: "6a40534e-b6ef-5e43-992e-5b6a1567b3a0",
  },
  {
    driverId: "acd83b7b-7f73-5d96-8f3b-d0e0e5af1a3b",
    driverName: "Amelia Gardner",
    carId: "ca94dbe5-5f1f-5af4-a720-83b79059e9b2",
  },
  {
    driverId: "41f0408f-1225-582e-b415-7c0753bade97",
    driverName: "Ruth Herrera",
    carId: "92946595-354e-5f4a-971b-ae8c1814c0a1",
  },
  {
    driverId: "eae8ff3a-c563-5d45-8ab8-b7641613ea1b",
    driverName: "Ellen Osborne",
    carId: "c459dc7c-1a4d-5d32-bf3b-46a9cb7457ca",
  },
  {
    driverId: "21c36e73-013d-5ef6-bc5b-8d79c9adee0f",
    driverName: "Bessie Hayes",
    carId: "b6d10092-63e8-517c-94c5-abe0e314e9c6",
  },
  {
    driverId: "79b7ab4f-da73-5f34-8288-ea4522214b18",
    driverName: "Jack Chandler",
    carId: "abda6cc5-d444-5286-a695-f26855c10b4c",
  },
  {
    driverId: "674c37e0-abbe-5127-ac9d-109aa2a1b448",
    driverName: "Tony Kelley",
    carId: "b74eb546-3503-5551-bd21-b134ed9b32be",
  },
  {
    driverId: "96443247-d815-573f-8b2f-272ae85b2f2c",
    driverName: "James Mendoza",
    carId: "df9824b1-6993-5340-8a97-11420e0501ca",
  },
  {
    driverId: "808c3cda-8e30-529d-90a7-efd0e9592f66",
    driverName: "Florence Roy",
    carId: "03866168-c962-51be-a6b6-036c615efd97",
  },
  {
    driverId: "678f2a32-d188-5c0d-9aac-2bb411a4fe9c",
    driverName: "Jim Patterson",
    carId: "103e5a93-5208-5187-b530-828c26baba37",
  },
  {
    driverId: "6a1d96ba-5696-55dd-b75a-fc115ac3442d",
    driverName: "Maud Horton",
    carId: "149b11d4-b380-532c-a884-706614c1badd",
  },
  {
    driverId: "a59f80ce-cd8b-5fcd-9701-1098589eae8b",
    driverName: "Sam Castillo",
    carId: "ec008d8b-b059-5d6d-85ec-f7494cf1d263",
  },
  {
    driverId: "8cf423c9-b409-5ea9-ad12-2ec6577396a9",
    driverName: "Tyler Garner",
    carId: "21d38f5f-4193-51ee-8838-0b4a4da901f3",
  },
  {
    driverId: "32d989ad-a521-5f87-84c6-cd51e8adc87e",
    driverName: "Mamie Henderson",
    carId: "5f5a16d1-9ff7-5746-9291-f23b9f854ec5",
  },
  {
    driverId: "90d96434-255f-5458-b59a-d01d3e189b7e",
    driverName: "Emilie Jones",
    carId: "c70bc8d5-c18e-53e2-861c-613b759ceb9f",
  },
  {
    driverId: "56b88702-9aa0-508c-bd55-66ea1c41df44",
    driverName: "Johanna Clark",
    carId: "85c7ae99-b9cf-5d2b-bf38-19ee183e0223",
  },
  {
    driverId: "21208db1-676f-5cc0-887b-fba8d8a65a6c",
    driverName: "Francis Mack",
    carId: "49a63f95-c6c1-5581-b504-31c57d996847",
  },
  {
    driverId: "4e68ad8e-c35d-5b4b-aeb5-b31d69d930b6",
    driverName: "Rodney Cross",
    carId: "4929ff91-7bc0-56ec-8aa5-663ea2aed72e",
  },
  {
    driverId: "a6012ce7-abc6-56c2-b4af-c4dd3fc44938",
    driverName: "Josie Schultz",
    carId: "3b8f6f85-e920-50f4-9008-51c69e1cc28e",
  },
  {
    driverId: "a8fc07a0-6224-5775-95ce-4807057eb552",
    driverName: "Loretta Patterson",
    carId: "15ca8f22-8687-5e31-8174-aa78f56ac0b1",
  },
];

export const routes = [
  {
    routeId: "2741f399-e988-59b2-89c4-6d87eba90dd9",
    amount: "185.33",
    start: "Nadketij",
    dest: "Morugram",
  },
  {
    routeId: "bc950dd6-eee7-53de-85f8-d31773e894da",
    amount: "167.71",
    start: "Gilusub",
    dest: "Saofemu",
  },
  {
    routeId: "6785a1fc-a6d2-5332-81b8-0bae3516f045",
    amount: "186.64",
    start: "Teduub",
    dest: "Dageaf",
  },
  {
    routeId: "2733120f-9713-509e-a85f-38405fc2bb60",
    amount: "148.13",
    start: "Figkitoz",
    dest: "Junwaev",
  },
  {
    routeId: "ef7d23c8-dd12-586e-80c7-d58cde43ef9d",
    amount: "118.90",
    start: "Hukako",
    dest: "Ofjumwip",
  },
  {
    routeId: "de6ab0a7-41ba-5907-869f-cdbbbf13aa74",
    amount: "108.74",
    start: "Olicunimo",
    dest: "Pairilek",
  },
  {
    routeId: "3a26e6c6-d1ac-5e20-8785-2ef828f0c8f7",
    amount: "122.98",
    start: "Tipcuges",
    dest: "Nicvomup",
  },
  {
    routeId: "932ffc0a-803b-50b2-adb4-19d4b026e3e4",
    amount: "132.90",
    start: "Soizhor",
    dest: "Monepebi",
  },
  {
    routeId: "c55948c7-a601-544d-aeaa-6c87f7285c3d",
    amount: "56.56",
    start: "Ranifpek",
    dest: "Jovejiba",
  },
  {
    routeId: "04d37e2d-1880-5504-9a64-d3ed7fcec9e8",
    amount: "167.19",
    start: "Baszucu",
    dest: "Jijukdeh",
  },
  {
    routeId: "814e5db1-5cfe-581d-b6fa-160e01e3c751",
    amount: "88.89",
    start: "Hodohbol",
    dest: "Gisduzod",
  },
  {
    routeId: "01e562af-5ea7-5161-b823-2c68ddaea499",
    amount: "94.05",
    start: "Ipewohvi",
    dest: "Fulharuf",
  },
  {
    routeId: "31ebed30-6e68-5f83-88b3-511c3acf6468",
    amount: "60.40",
    start: "Ferfozro",
    dest: "Rasewneh",
  },
  {
    routeId: "1183a4db-3e9e-5838-ba7f-a8b8fda6fd13",
    amount: "138.91",
    start: "Ujusadod",
    dest: "Lefafid",
  },
  {
    routeId: "367241f3-db62-5522-a1eb-df88f9309d42",
    amount: "183.61",
    start: "Baczufu",
    dest: "Gusaugu",
  },
  {
    routeId: "57b1fe95-6049-533f-accc-f26a5609414c",
    amount: "181.01",
    start: "Dizorse",
    dest: "Jugwifa",
  },
  {
    routeId: "64de46eb-8721-5798-a9a8-c041645263ef",
    amount: "91.71",
    start: "Heuciuj",
    dest: "Lijgecoc",
  },
  {
    routeId: "40915ad1-9049-5a49-bc10-0c910445ede9",
    amount: "109.54",
    start: "Gafmizus",
    dest: "Jozkozo",
  },
  {
    routeId: "da812f26-3e10-5e8b-a6bf-7b35600ce503",
    amount: "52.00",
    start: "Nepvuitu",
    dest: "Cumewih",
  },
  {
    routeId: "8efce3cc-8f68-5eec-b9d6-0324715a5acf",
    amount: "176.73",
    start: "Tekahej",
    dest: "Harujod",
  },
  {
    routeId: "c9387039-d639-580a-aa80-49ebbfda92a5",
    amount: "105.35",
    start: "Wuhasceb",
    dest: "Dosregse",
  },
  {
    routeId: "589313f6-ffe0-56c9-8928-1100f152858b",
    amount: "95.55",
    start: "Aljedna",
    dest: "Idanapca",
  },
  {
    routeId: "e2bf871c-b686-5bf1-aae8-390a38b6a582",
    amount: "118.80",
    start: "Fojusoma",
    dest: "Jiommi",
  },
  {
    routeId: "afb207bd-ca03-5531-9817-55785456ad9d",
    amount: "165.18",
    start: "Zaeheweh",
    dest: "Kuhrelat",
  },
  {
    routeId: "9d396097-87f1-585b-8225-7812c84d682f",
    amount: "160.11",
    start: "Diajeco",
    dest: "Kepzenet",
  },
  {
    routeId: "dd7733b6-9374-5054-bae7-736908b22556",
    amount: "69.48",
    start: "Hegidla",
    dest: "Bunjugdan",
  },
  {
    routeId: "81f2b938-369a-5e8c-a72c-9cece00eaaa4",
    amount: "182.50",
    start: "Uloehbon",
    dest: "Datoset",
  },
  {
    routeId: "0c464bcf-91db-51b2-b34b-8402834aebd1",
    amount: "90.34",
    start: "Ribozte",
    dest: "Lasbeda",
  },
  {
    routeId: "308a3d02-1c1f-51a4-bf3c-8f8c8993c71b",
    amount: "85.78",
    start: "Nulikam",
    dest: "Jodvejbu",
  },
  {
    routeId: "0e63e5c2-026d-5fbc-aab7-97c3d880a43e",
    amount: "164.31",
    start: "Neopeaf",
    dest: "Hisopi",
  },
];
