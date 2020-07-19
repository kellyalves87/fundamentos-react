import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import ListStudents from "./components/repetition/ListStudents";
import ProductsTable from "./components/repetition/ProductsTable";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParams from "./components/basics/WithParams";
import First from "./components/basics/First";

export default () => (
  <div className='App'>
    <h1>React Fundamentals</h1>

    <div className='Cards'>

    <Card title='#07 - Repetition Challenge' color='#3A9AD9'>
        <ProductsTable></ProductsTable>
      </Card>

    <Card title='#06 - Repetition' color='#FF4C65'>
        <ListStudents></ListStudents>
      </Card>

      <Card title='#05 - Component with Children' color='#00C8F8'>
        <Family lastName='Alves'>
          <FamilyMember name='Guilherme' />
          <FamilyMember name='Kelly' />
          <FamilyMember name='Igor' />
        </Family>
      </Card>

      <Card title='#04 - Random Challenge' color='#FA6900'>
        <Random min={1} max={60} />
      </Card>

      <Card title='#03 - Fragment' color='#E94C6F'>
        <Fragment />
      </Card>

      <Card title='#02 - With Params' color='#E8B71A'>
        <WithParams title='Student status' student='Kelly Alves' note={9.7} />
      </Card>

      <Card title='#01 - First component' color='#588C73'>
        <First></First>
      </Card>
    </div>
  </div>
);
