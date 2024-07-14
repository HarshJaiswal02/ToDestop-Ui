/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ListItem = ({ text }) => (
  <li className="flex gap-4">
    <i className="fa-solid fa-check text-gray-500"></i>
    <Link
      className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
      href=""
    >
      {text}
    </Link>
  </li>
);

export default ListItem;