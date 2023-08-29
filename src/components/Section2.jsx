
import { Link } from 'react-router-dom';
import "../styles/Section2.scss"

import React from 'react'

export default function Section2() {
  return (
    <div>
          <div className="section2">
                  <div className="container">
                          <p className='sec2-p'>Grand edu o'quv markazi 2019 - yilda tashkil  etilgan.
   Hozirga kelib markazning filiallar soni 2ta ga yetib, Toshkent shahrining eng qulay joylarida o'z faoliyatini yuritib kelmoqda.   
    Zamonaviy ilg'or texnalogiyalar bilan jihozlangan hamda yuqori saviyada ta'lim olish uchun eng yaxshi sharoitlar yaratilgan.</p>
                    </div>
                    <div className="container ">
                           <div className='d-flex justify-content-between align-items-center row '>
                                            <div className="video text-center col-xl-6">
                    <iframe width="570" height="350"
                     src="https://www.youtube.com/embed/sWCVEu0v9bk?si=y8TKrbjDlGFJD36h" 
                     title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay;
                     clipboard-write; encrypted-media;
                      gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="video text-center col-xl-6">
                    <iframe width="570" height="350" 
                    src="https://www.youtube.com/embed/Cds-Kbq-JWU?si=M0FE5Msdyl_YXd0r" 
                    title="YouTube video player" frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write;
                      encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowfullscreen></iframe>
                    </div>
                    </div>
                    </div>
                 

                    
                </div>   
                <div className="boxes23">
                    <div className='container'>
                    <h1 className='text-center mt-5'>Nima uchun aynan biz?</h1>
                 <div className='p-2 text-center'>Bizning o‘quv markazimizda o‘qish orqali</div>
                 <div className='p-100 text-center mb-5'>quyidagilarga ega bo‘lasiz</div>

                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                    <div className="cart">
                                <div className="circle .t502__circle " >
                                    1
                                </div>
                                </div>
                                <div>
                                    <h5>Maxsus Oson o‘qitish tizimi.</h5>
                                    <p>Har bir mavzu maydalab oson qilib tushuntiriladi.</p>
                                </div>
                                </div>
                      
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                <div className="cart">
                                <div className="circle .t502__circle " >
                                    2   
                                </div>
                                </div>
                                <div>
                                    <h5>15 yildan tajribaga ega Ustozlar.</h5>
                                    <p>Bizning o‘qituvchilarimiz yangi ish boshlagan talabalar emas, balki
                                         o‘z ishining haqiqiy mutaxasislari hisoblanishadi.</p>
                                </div>
                                </div>
                      
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                <div className="cart">
                                <div className="circle .t502__circle " >
                                    3
                                </div>
                                </div>
                                <div>
                                    <h5>Bepul kitoblar va tarqatma materiallar.</h5>
                                    <p>Ta'lim Britaniya universiteti (Oxford University Press) 
                                        tomonidan ishlab chiqilgan maxsus dastur bo'yicha olib boriladi.</p>
                                </div>
                                </div>
                      
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                <div className="cart">
                                <div className="circle .t502__circle " >
                                    4
                                </div>
                                </div>
                                <div>
                                    <h5>Cheklanmagan dars soatlari.</h5>
                                    <p>Darsdan tashqari markazda qolib, dars qilish imkoniyati.</p>
                                </div>
                                </div>
                      
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                <div className="cart">
                                <div className="circle .t502__circle " >
                                    5
                                </div>
                                </div>
                                <div>
                                    <h5>Ikkinchi ustoz xizmati.</h5>
                                    <p>Siz bilan 2-o‘qituvchimiz qo‘shimcha tarzda shug‘ullanadi.</p>
                                </div>
                                </div>
                      
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className='cart1 d-flex d-block'>
                                <div className="cart">
                                <div className="circle .t502__circle " >
                                    6
                                </div>
                                </div>
                                <div>
                                    <h5>Har oyda test sinovlari</h5>
                                    <p>Har oyda o‘zingiz o‘qiyotgan daraja bo‘yicha 
                                        DTM va Mock test sinovlari bo‘lib o‘tadi</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mb-5'>
                            <Link to="/section7"><button className='btn btn-outline-primary'>BEPUL DARSLARGA YOZILISH</button></Link>
                </div>
                    </div>
                
                </div>

    </div>
  )
}
