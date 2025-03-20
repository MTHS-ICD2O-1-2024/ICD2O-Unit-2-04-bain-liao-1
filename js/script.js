// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a triangle.
 */
function onButtonClicked () {
  // input
  const baseOfTriangle = parseFloat(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTriangle = (baseOfTriangle * heightOfTriangle)/2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}
