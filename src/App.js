/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

import DrawerNavigator from './navigation/DrawerNavigator';

const AppNavigator = DrawerNavigator;

export default createAppContainer(AppNavigator);
