import React from 'react';
import AppNavigator from './AppNavigator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faFileMedical, faStar,  faChevronLeft, faChevronRight, faSearch, faMap, faUser, faList, faFilter, faNotesMedical, faUserCircle, faHome, faCommentAlt, faListAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFileMedical, faStar,  faChevronLeft, faChevronRight, faSearch, faCoffee, faUser, faMap, faList, faFilter, faNotesMedical, faUserCircle, faChevronLeft, faHome, faCommentAlt, faListAlt, faAddressBook )

export default function App() {
  return (
    <AppNavigator/>
);
}