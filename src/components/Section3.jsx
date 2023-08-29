
import { Link } from 'react-router-dom';
import "../styles/Section3.scss"

import React from 'react'

export default function Section3() {
  return (
    <div className='section3'>
     <div className="boxes20 ">
                    <div className="container">
                        <h1 className='text-center  mb-3'>Kurslarimiz</h1>
                        <div className='p-2 text-center'>Siz quyidagi fanlardan tayyorlanib, orzuyingizdagi</div>
                        <div className='p-100 text-center mb-4'>universitetga o‘qishga kirishingiz mumkin.</div>
                        <div className="d-flex justify-content-between align-items-center  mt-5 boxes100">
                            <div className=" mb-3  box4">
                                <img className='img11' src="/image/math.svg" alt="not found" />
                                <h6>Matematika</h6>
                                <p>Matematika fanidan 1 yılda tayyorlangan o‘quvchilarimizning
                                    100% Universitetlarga o‘qishga qabul qilinishdi</p>
                            </div>
                            <div className="mb-3  box4 box100">
                                <img className='img11' src="/image/kim.svg" alt="not found" />
                                <h6>Kimyo va Biologiya</h6>
                                <p>Kimyo va Biologiya fanlaridan tayyorlanib nufuzli Tibbiyot Oliy o'quv yurtlari talabasiga aylaning</p>
                            </div>
                            <div className=" mb-3 box4 box100">
                                <img className='img11' src="/image/inlish.svg" alt="not found" />
                                <h6>Ingiz tili (General English)</h6>
                                <p>Ingliz tilidan General English kurslarimizga 
                                    qatnashib, IELTS olishga tayyorlaning</p>
                            </div>
                        </div>
                        <div className='text-center'><Link to="/section7"><button className='btn btn-outline-primary'>BEPUL DARSGA QATNASHISH</button></Link></div>
                    </div>


                </div>
    </div>
  )
}
