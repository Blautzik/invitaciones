import Head from 'next/head'
import React from 'react'
import InviContainer from '../components/InviContainer'

const invitacion = () => {
  return (
    <>
    <Head>
    <title>Invitacion ejemplo</title>
        <meta name="invitacion ejemplo" content="invitacion ejemplo" />
    </Head>
    <InviContainer/>
    </>
  )
}

export default invitacion