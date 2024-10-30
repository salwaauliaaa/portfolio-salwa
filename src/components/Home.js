import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Salwa Aulia Azzahra</h1>
        <h2>Web Developer & Programmer</h2>
        <p>Umur: 17 Tahun</p>
        <p>Tlp: 085867150278</p>
        <p>Alamat: Desa Gumuk, Kec. Tengaran</p>
        <p>Email: <a href="mailto:salwaaulia504@gmail.com">salwaaulia504@gmail.com</a></p>
        <p>Saya adalah seorang siswa kelas 12 yang memiliki passion dalam pengembangan web dan pemrograman. Dengan keterampilan dalam HTML, CSS, PHP, dan SQL, saya berkomitmen untuk menciptakan solusi digital yang inovatif dan efektif.</p>
        <p>Saat ini, saya fokus pada pembuatan situs web yang responsif dan interaktif, serta meningkatkan pengalaman pengguna melalui desain yang menarik dan praktik pengkodean yang efisien. Saya percaya bahwa teknologi dapat mengubah ide menjadi kenyataan, dan saya bersemangat untuk berkontribusi dalam industri ini.</p>
        
        <div className="skills">
          <div className="skill html">HTML</div>
          <div className="skill css">CSS</div>
          <div className="skill php">PHP</div>
          <div className="skill csharp">C#</div>
          <div className="skill sql">SQL</div>
        </div>
      </div>
      <div className="home-photo">
        <img src="/images/salwa2.jpeg" alt="Salwa Aulia Azzahra" />
      </div>
    </div>
  );
}

export default Home;