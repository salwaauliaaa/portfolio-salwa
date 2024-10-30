import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <div className="experience-box">
        <h2>Pengalaman 1</h2>
        <p>Di kelas 10 saya mempelajari dasar-dasar HTML dan C#, yang mencakup konsep pemrograman fundamental.</p>
      </div>
      <div className="experience-box">
        <h2>Pengalaman 2</h2>
        <p>Di kelas 11 saya memperluas keterampilan saya ke basis data, PHP, dan SQL, mengerjakan proyek untuk membuat aplikasi CRUD dan situs web lengkap</p>
      </div>
      <div className="skills-box">
        <h2>Skills</h2>
        <p>saya sudah mulai menguasai HTML dan CSS untuk membuat website yang menarik. Saya juga belajar C#, PHP, dan SQL Server untuk mengelola data, serta mulai menjelajahi React JS. Meskipun masih dalam proses belajar, saya sangat antusias untuk mengembangkan keterampilan saya. Jika Anda mencari seseorang yang bersemangat dan siap belajar, saya adalah orangnya!"</p>
      </div>
      <div className="projects-box">
        <h2>Proyek & Keterampilan</h2>
        <p>Berpengalaman dalam membuat desain responsif, mengembangkan antarmuka intuitif, dan menerapkan solusi basis data yang aman dan efisien. Selalu bersemangat untuk belajar dan berkembang di bidang pengembangan web.</p>
      </div>
    </div>
  );
}

export default About;
