import React, {useEffect, useState} from 'react';


const EditUserProfile = () => {
    const [name, setName] = useState(' ');
    const [bio, setBio] = useState(' ');
    const [genre, setGenre] = useState(' ');

    const win = window.localStorage;
    console.log(win)
  const handleSubmit = (e) =>{
    e.preventDefault();
    window.clear();
    setName('');
    setBio('')
    setGenre('')
}
    useEffect(() =>{
        if(win.getItem('name'))
        setName(win.getItem('name'));

        if(win.getItem('bio'))
        setName(win.getItem('bio'));

        if(win.getItem('genre'))
        setName(win.getItem('genre'));
        
    }, [])

    useEffect(()=>{
        win.setItem('name',name);
        win.setItem('bio', bio);
        win.setItem('Genre', genre);
    },[name,bio,genre])

  return (
    <main>
      <section className="flex-row justify-center">
        <form onSubmit={handleSubmit}>
          <div className="field col-12 col-md-10 mb-3 p-3">
            <label htmlFor=''>What name do you go by? </label> <br/>
            <input type='text' value={name}    onChange={(e)=>setName(e.target.value)}   />
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
            <label htmlFor=''>Tell us about your self </label> <br/>
            <input type='text' value={bio}    onChange={(e)=>setBio(e.target.value)}   />
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
            <label htmlFor=''>What is your perferred genre? </label> <br/>
            <input type='text' value={genre}    onChange={(e)=>setGenre(e.target.value)}   />
            </div>
            <div className="submitBtn">
                <button type='submit'>Submit</button>

            </div>
      </form>
      </section>
    </main>
  );
};

export default EditUserProfile;
