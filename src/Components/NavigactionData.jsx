import { FaUser } from "react-icons/fa";
import './nav.moudle.css'
import { IoChevronDownOutline } from "react-icons/io5";


export const NavigactionData = [
    {
      "id": 1,
      "name": "About Us",
      "url": "/"
    },
    {
      "id": 2,
      "name": "Products",
      "url": "/deals",
      "icon":<IoChevronDownOutline/>,
        "submenus": [
        {
          "id": 3,
          "name": "Products 1",
          "url": "/"
        },
        {
          "id": 4,
          "name": "Products 2",
          "url": "/"
        },
      ],
    },
    {
      "id": 5,
      "name": "industries",
      "url": "/",
      "icon":<IoChevronDownOutline/>,
        "submenus": [
        {
          "id": 6,
          "name": "industries 1",
          "url": "/"
        },
        {
          "id": 7,
          "name": "industries 2",
          "url": "/"
        },
       ],
    }, {
      "id": 8,
      "name": "Resources",
      "url": "/"
    },
];

  