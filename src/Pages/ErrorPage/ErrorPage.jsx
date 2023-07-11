import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import img from '../../../public/images/error.png'
import useTitleSet from '../../hooks/useTitleSet'

const ErrorPage = () => {
  const { error, status } = useRouteError()

// useTitleSet
useTitleSet('ErrorPage')

  return (
    <section>
      <Header></Header>
      <div className='d-flex justify-content-center'>
        <img className='w-25 h-25' src={img} alt="" />
      </div>
    <div className='text-center'>
          <h2 className=''>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p>
            {error?.message}
          </p>
          <Link to='/'
            className='px-5 py-3 font-semibold rounded bg-info text-white text-decoration-none'
          >
            Back to homepage
          </Link>
        </div>
 <div className='mt-5'>
 <Footer></Footer>
 </div>
    </section>
  )
}

export default ErrorPage
