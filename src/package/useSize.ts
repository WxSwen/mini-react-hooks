// import * as React from 'react';
// import { isClient } from './util';

// const { useState, useEffect, useRef } = React;

// const DRAF = (callback: () => void) => setTimeout(callback, 35);

// export type Element = ((state: State) => React.ReactElement<any>) | React.ReactElement<any>;

// export interface State {
//   width: number;
//   height: number;
// }

// const useSize = (
//   element: Element,
//   { width = Infinity, height = Infinity }: Partial<State> = {}
// ): 