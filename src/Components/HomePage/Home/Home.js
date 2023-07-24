import React from 'react'
import { Header } from '../Header/Header'
import { Courses } from '../Courses/Courses'
import { Using } from '../How_do_we_use/using'
import { Learn } from '../Learn/learn'
import { Platform } from '../Platform/Platform'
import { Popular_Courses } from '../Popular_Courses/Popular_Courses'
import { About_Courses } from '../About_Courses/About_Courses'

export const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Using />
      <Learn />
      <Platform />
      <Popular_Courses />
      <About_Courses />
    </>
  )
}

