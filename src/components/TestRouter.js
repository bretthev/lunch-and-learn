import React from 'react';


const TestRouter = ({testFirebase}) => {
  console.log(testFirebase)
    return (
      <section className="homepage">
        <h2>Testing Router Setup</h2>
        <form className='InputCityArea' onSubmit={ (e) => {
        e.preventDefault()
        testFirebase('is this working')
    }}>
      <button children='Test Firebase' className='SubmitNewCity' />
    </form>
      </section>
    );
}

export default TestRouter;
