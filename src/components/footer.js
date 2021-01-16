import React from "react";

import FilterLink from '../containers/FilterLink';
import { VisbilityFilters } from '../actions/tasks';

const Footer = () => (
    <div>
        <span>Voir : </span>
        
        <FilterLink filter = {VisbilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter = {VisbilityFilters.SHOW_ALL}>ACTIVE</FilterLink>
        <FilterLink filter = {VisbilityFilters.SHOW_ALL}>DELETED</FilterLink>
    </div>
)

export default Footer;
