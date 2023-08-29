import "../styles/Section7.scss"

export default function Section7() {

  return (
    <div>
              <div className="section7">
                    <div className="container text-center">
                        <strong className='free1'>Bepul Darslarga
                            Ro‘yxatdan o‘ting
                            va 25% chegrimaga ega bo‘ling!</strong>
                        <p className='p-2 mt-3'>
                            Ma'lumotlaringizni qoldiring va adminstratorlarimiz siz </p>
                        <p className='p-5'> bilan bog‘lanishadi.</p>
                        <form> 
                            <div className='f-form'>       
                            <div className=" t-input-block mb-2 me-2 wrapper">
                                    <input required
                                    type="text" name='name'
                                        className='t-input wrapper w-100'
                                        placeholder='Familiya va Ism'
                                    />
                                </div>
                                <div className="t-input-block mb-2 me-2 wrapper">
                                    <input required
                                     type="number"  name='phone'
                                        className='t-input wrapper w-100'
                                        placeholder='+998 99 123 45 67'
                                    />
                            </div>
                                <div className="t-input-block mb-2">
                                    <select required
                                     name="fanlar"  className="form-select wrapper" aria-label="Default select example">
                                        <option value>Kursni tanlang</option>
                                        <option value="1">Matematika</option>
                                        <option value="2">Ingliz tili</option>
                                        <option value="3">Kimyo</option>
                                        <option value="4">Biologiya</option>
                                    </select>
                            </div>
                            <div className='d-input w-100'>
                                <button type='submit' className='btn btn1 btn-primary cursor-pointer'> 
                                Darslarga yozilish
                                </button>
                            </div>
                       
                        </div></form>
                      
                    </div>
                </div>
    </div>
  )
}

