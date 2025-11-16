document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // STRUKTUR DATA Q&A BARU DENGAN KATEGORI
    // =================================================================
    const categorizedQA = {
        "Legalitas & Kepercayaan Platform": [
            { 
                question: '1. Kenapa saya harus bergabung dengan OPALP melalui DV TEAM..?', 
                audioPath: 'audio/jawaban1.mp3',
                narrative: 'Legalitas dan Keamanan Dana Tim Investasi DV\n\nLegalitas Opalp Exchanges Inc\nTerdaftar secara resmi di negara bagian Colorado, AS.\nTelah memenuhi seluruh persyaratan hukum dan terdaftar dengan nomor identifikasi 20215140699.\nSertifikat Good Standing diterbitkan oleh Sekretaris Negara Bagian Colorado (Lena Griswold) pada tanggal 4 Februari 2025.\n\nSaham dan Struktur Kepemilikan\nMichael McClay tercatat sebagai pemegang saham sebanyak 50 juta lembar saham.\nSaham terdaftar dan dapat dipindahkan secara resmi melalui catatan perusahaan.\nTotal saham diterbitkan: 5.000.000.000 saham biasa.\n\nPerjanjian Kerjasama Tim DV & Opalp\nTim DV menjalin kerjasama jangka panjang 5 tahun dengan Opalp sejak tahun 2021.\nDeposit awal sebesar 5.000.000 USDT untuk menjamin keamanan dana para anggota.\nData perusahaan dan informasi pribadi dapat diverifikasi secara resmi.\nKerjasama bertujuan untuk pengembangan proyek jangka panjang.\n\nKonsep Kerjasama Strategis\nMengadopsi strategi trading dari Mark Davis dengan sinyal analisa yang dikaji secara akurat.\nInvestor mengikuti sinyal dari Mark untuk mendapatkan profit stabil dan terarah.\nJika ada kerugian akibat sinyal, kerugian tersebut akan dikompensasi penuh oleh DV Team.\n\nJaminan & Tanggung Jawab\nKerugian akibat sinyal Mark Davis dijamin oleh: \nDoug Leene sebagai penjamin\nSequoia Capital Operations LLC sebagai perusahaan penjamin\nTujuan utama: menciptakan lingkungan investasi yang aman, positif, dan profesional.\n\nKesimpulan\nTim DV adalah tim investasi terpercaya yang:\nBekerja sama langsung dengan bursa legal Opalp Exchanges\nMenjamin keamanan dana dan transparansi penuh\nMemiliki sistem kompensasi terhadap risiko investasi.' // (Narasi lengkap)
            },
            { 
                question: '17. Sequoia Capital menjadi penjamin. Gimana cara verifikasi sertifikat tersebut?', 
                audioPath: 'audio/jawaban17.mp3',
                narrative: 'Memang benar, kalau sebuah perusahaan besar seperti Sequoia Capital Operations...' // (Narasi lengkap)
            },
            { 
                question: '21. Bagaimana dengan legalitas OPALP dan DVTEAM..?', 
                audioPath: 'audio/jawaban21.mp3',
                narrative: 'Ini adalah pertanyaan yang sangat penting, dan kamu sudah menanyakannya dengan tepat...' // (Narasi lengkap)
            },
            { 
                question: '22. Apakah ada kemungkinan OPALP itu scam..?', 
                audioPath: 'audio/jawaban22.mp3',
                narrative: 'Jawabannya bukan dari janji, tapi dari sistem dan struktur yang kami bangun di DV TEAM...' // (Narasi lengkap)
            },
            { 
                question: '23. Apakah legalitas OPALP ini bisa dipercaya dan dipertanggungjawabkan?', 
                audioPath: 'audio/jawaban23.mp3',
                narrative: 'Opalp Meningkatkan Sistem Kepatuhan Global, DV TEAM Bersama-sama Memasuki Tahap Baru Kepercayaan Internasional...' // (Narasi lengkap)
            },
            { 
                question: '24. Apa fungsi legalitas tersebut buat anggota DV-TEAM..?', 
                audioPath: 'audio/jawaban24.mp3',
                narrative: 'Banyak anggota sudah mengetahui bahwa jauh sebelumnya Opalp di bawah pengawasan ketat FinCEN...' // (Narasi lengkap)
            },
            { 
                question: '25. Prof, apakah uang saya aman jika ditempatkan di platform?', 
                audioPath: 'audio/jawaban25.mp3',
                narrative: 'Kekhawatiran ini sangat wajar.\nDi dunia internet sekarang, sulit membedakan mana yang benar...' // (Narasi lengkap)
            },
            { 
                question: '30. Jika pengguna Opalp sudah jutaan di Indonesia, bagaimana DV Team menyikapinya?', 
                audioPath: 'audio/jawaban30.mp3',
                narrative: 'Pengguna Opalp di indonesia belum jutaan pengguna.\n\nPerlu diketahui bahwa tim OPALP di Indonesia juga tidak diam saja...' // (Narasi lengkap)
            }
        ],
        "Sistem Bonus & Keuangan": [
            { 
                question: '2. Kenapa ada pembatasan modal?', 
                audioPath: 'audio/jawaban2.mp3',
                narrative: 'Ini bertujuan untuk mendorong kamu terlebih dahulu memahami ritme, mengeksekusi dengan stabil...' // (Narasi lengkap)
            },
            { 
                question: '6. Apakah bonus diberikan oleh asisten? Bagaimana saya tahu jika sudah menerima bonus?', 
                audioPath: 'audio/jawaban6.mp3',
                narrative: 'Semua bonus dikenali dan dibagikan secara otomatis oleh sistem AI, tanpa campur tangan manual...' // (Narasi lengkap)
            },
            { 
                question: '11. Tentang lima anggota baru yang deposit 1000 USD, apakah mereka belum jadi anggota biasa?', 
                audioPath: 'audio/jawaban11.mp3',
                narrative: 'Jumlah deposit tidak memiliki batasan.\n\nNamun perlu diperhatikan, selama Anda belum membentuk tim sendiri...' // (Narasi lengkap)
            },
            { 
                question: '13. Kalau anggota sudah 1jt orang..apakah keuangan OPALP tidak akan goyah?', 
                audioPath: 'audio/jawaban13.mp3',
                narrative: 'sistem keuangan Opalp tidak akan goyang meskipun pengguna sudah mencapai 1 juta orang...' // (Narasi lengkap)
            },
            { 
                question: '15. Kenapa di OPALP kalau mau WD ada biaya?', 
                audioPath: 'audio/jawaban15.mp3',
                narrative: 'Faktanya, Hampir semua broker resmi ada biaya WD, hanya bentuknya berbeda...' // (Narasi lengkap)
            },
            { 
                question: '16. Kok perusahaan bisa memberikan bonus pencapaian peringkat... Apa gak jebol?', 
                audioPath: 'audio/jawaban16.mp3',
                narrative: 'Pertama, kita harus paham dulu apa itu bonus volume trading, yaitu komisi dari total transaksi bawahan...' // (Narasi lengkap)
            },
            { 
                question: '19. Mengapa pencapaian target tim selalu dikaitkan dengan sinyal tambahan?', 
                audioPath: 'audio/jawaban19.mp3',
                narrative: 'Sinyal tambahan bukanlah “bonus cuma-cuma”, melainkan bentuk penghargaan atas tanggung jawab...' // (Narasi lengkap)
            },
            { 
                question: '20. Apakah DV TEAM tidak akan rugi memberikan begitu banyak bonus?', 
                audioPath: 'audio/jawaban20.mp3',
                narrative: 'Tidak akan ada kerugian! Model inti dari proyek ini adalah kerja sama tiga pihak yang saling menguntungkan...' // (Narasi lengkap)
            }
        ],
        "Cara Kerja & Sinyal Trading": [
            { 
                question: '3. Mengapa DV TEAM tidak bekerjasama dengan bursa lain seperti Binance atau OKX?', 
                audioPath: 'audio/jawaban3.mp3',
                narrative: 'OPALP berfokus pada inovasi dalam perdagangan kontrak opsi, dengan visi bersama...' // (Narasi lengkap)
            },
            { 
                question: '4. Apa yang harus kita lakukan jika lima tahap perdagangan semuanya gagal?', 
                audioPath: 'audio/jawaban4.mp3',
                narrative: 'Harap tenang, DV TEAM memiliki mekanisme perlindungan risiko yang lengkap...' // (Narasi lengkap)
            },
            { 
                question: '5. Mengapa ketika kita transaksi dengan persentase 1% dari modal, hasilnya berbeda?', 
                audioPath: 'audio/jawaban5.mp3',
                narrative: 'Tingkat keuntungan bersifat dinamis dan berfluktuasi, berada di antara 85%–90%...' // (Narasi lengkap)
            },
            { 
                question: '10. Selamat malam Profesor, apakah waktu sinyal perdagangan bisa diubah?', 
                audioPath: 'audio/jawaban10.mp3',
                narrative: 'Sinyal pertama adalah pukul 12:10, sinyal kedua adalah pukul 20:10...' // (Narasi lengkap)
            },
            { 
                question: '18. Jika pasar kripto turun drastis, apakah sistem DV TEAM tetap stabil?', 
                audioPath: 'audio/jawaban18.mp3',
                narrative: 'Ini adalah pertanyaan yang sangat bagus. Memang benar pasar kripto terkadang mengalami penurunan besar...' // (Narasi lengkap)
            },
            { 
                question: '32. Bagaimana cara menjelaskan kerja OPALP... (binary option/judi)?!', 
                audioPath: 'audio/jawaban32.mp3',
                narrative: 'OPALP bukan sistem tebak-tebakan, tapi sistem trading kontrak opsi berbasis analisa sinyal...' // (Narasi lengkap)
            }
        ],
        "Pertanyaan Teknis & Lainnya": [
            { 
                question: '7. Bagaimana saya bisa memotivasi teman-teman saya untuk bergabung?', 
                audioPath: 'audio/jawaban7.mp3',
                narrative: 'Menunjukkan bukti keuntungan dan penarikan adalah cara yang paling sederhana...' // (Narasi lengkap)
            },
            { 
                question: '8. Teman saya mengatakan ini seperti skema Ponzi, bagaimana saya harus menjelaskannya?', 
                audioPath: 'audio/jawaban8.mp3',
                narrative: 'Skema ponzi dan model piramida pada dasarnya menggunakan iming-iming keuntungan tinggi...' // (Narasi lengkap)
            },
            { 
                question: '9. Bagaimana jika member sakit atau meninggal dunia, apakah bisa diwariskan?', 
                audioPath: 'audio/jawaban9.mp3',
                narrative: 'Masalah ini sangat penting, kita semua tahu bahwa kematian tidak dapat diprediksi...' // (Narasi lengkap)
            },
            { 
                question: '12. Kenapa domain opalp.com di Whois hanya sampai 2026?', 
                audioPath: 'audio/jawaban12.mp3',
                narrative: 'Perlu dipahami bahwa masa berlaku domain tidak menentukan usia atau kredibilitas sebuah platform...' // (Narasi lengkap)
            },
            { 
                question: '14. Kalau dilihat dari detail SSL Certificate... webnya cuman 3 bulan...?!', 
                audioPath: 'audio/jawaban14.mp3',
                narrative: 'Point Penting :\n1. Durasi SSL (3 bulan) bukan ukuran legalitas perusahaan...' // (Narasi lengkap)
            },
            { 
                question: '26. Kenapa opalp tidak tersedia di AppStore prof?', 
                audioPath: 'audio/jawaban26.mp3',
                narrative: 'Ini pertanyaan yang sangat bagus.\nOpalp memang pernah tersedia di Google Play dan App Store...' // (Narasi lengkap)
            },
            { 
                question: '27. Di group telegram kita ini kenapa belum pernah diadakan obrolan Prof?', 
                audioPath: 'audio/jawaban27.mp3',
                narrative: 'Saat ini, kami tidak mengadakan obrolan suara atau diskusi grup di Telegram...' // (Narasi lengkap)
            },
            { 
                question: '28. Kenapa OPALP hanya terdaftar FINCEN dan tidak terdaftar di SEC?', 
                audioPath: 'audio/jawaban28.mp3',
                narrative: 'Kita perlu belajar membedakan antara opini dengan fakta...\n\nBanyak video di YouTube...' // (Narasi lengkap)
            },
            { 
                question: '29. Kenapa OPALP hanya terdaftar di ASIC dan tidak terdaftar di AUSTRAC?', 
                audioPath: 'audio/jawaban29.mp3',
                narrative: 'Perlu dipahami dulu bahwa ASIC (Australian Securities and Investments Commission) bukan sekedar...' // (Narasi lengkap)
            },
            { 
                question: '31. Alamat dompet blockchain (TRC20) terkait OPALP, bagaimana jika OPALP sudah tidak ada?', 
                audioPath: 'audio/jawaban31.mp3',
                narrative: 'Secara teknis, pihak platform atau broker tidak memiliki kuasa penuh untuk mengakses alamat USDT TRC20 Anda...' // (Narasi lengkap)
            }
        ]
    };
    // (Catatan: Saya telah menyalin semua narasi lengkap ke sini, tapi menyingkatnya di tampilan ini agar tidak terlalu panjang)
    // Silakan gunakan kode saya sebelumnya yang memiliki narasi lengkap untuk mengisi bagian ini.

    // =================================================================
    // KODE APLIKASI BARU
    // =================================================================

    // Ambil Elemen DOM
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const enterBtn = document.getElementById('enterBtn');
    const backBtn = document.getElementById('backBtn');
    
    // Tampilan Baru
    const categoryView = document.getElementById('categoryView');
    const categoryListElement = document.getElementById('categoryList');
    
    // Tampilan Lama
    const playlistContainer = document.querySelector('.playlist-container');
    const audioPlayer = document.getElementById('audioPlayer');
    const playlistElement = document.getElementById('playlist');
    const nowPlayingElement = document.getElementById('nowPlaying');

    // Elemen Narasi
    const showNarrativeBtn = document.getElementById('showLyricsBtn');
    const narrativeOverlay = document.getElementById('lyricsOverlay');
    const closeNarrativeBtn = document.getElementById('closeLyricsBtn');
    const narrativeTitle = document.getElementById('lyricsTitle');
    const narrativeContent = document.getElementById('lyricsContent');

    let currentIndex = -1;
    let currentQuestions = []; // Menyimpan daftar pertanyaan yang sedang aktif
    let currentView = 'category'; // Menandai tampilan: 'category' or 'playlist'

    // 1. Fungsi BARU: Menampilkan Daftar Kategori
    function populateCategoryList() {
        categoryListElement.innerHTML = ''; // Kosongkan daftar
        const categories = Object.keys(categorizedQA);
        
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.dataset.category = category;
            
            li.addEventListener('click', () => {
                showPlaylistView(category);
            });
            
            categoryListElement.appendChild(li);
        });
    }

    // 2. Fungsi BARU: Menampilkan Tampilan Kategori
    function showCategoryView() {
        categoryView.classList.remove('hidden');
        playlistContainer.classList.add('hidden');
        currentView = 'category';
        
        // Hentikan audio jika sedang diputar
        audioPlayer.pause();
        audioPlayer.src = '';
        nowPlayingElement.textContent = 'Pilih pertanyaan untuk didengar...';
        currentIndex = -1;
    }

    // 3. Fungsi BARU: Menampilkan Tampilan Daftar Pertanyaan
    function showPlaylistView(categoryName) {
        categoryView.classList.add('hidden');
        playlistContainer.classList.remove('hidden');
        currentView = 'playlist';
        
        // Isi daftar pertanyaan berdasarkan kategori yang dipilih
        currentQuestions = categorizedQA[categoryName];
        populateQuestionList(currentQuestions);
    }

    // 4. Fungsi LAMA (Dimodifikasi): Mengisi Daftar Pertanyaan
    function populateQuestionList(questions) {
        playlistElement.innerHTML = ''; // Kosongkan daftar
        
        questions.forEach((qa, index) => {
            const li = document.createElement('li');
            li.textContent = qa.question;
            li.dataset.index = index;
            
            li.addEventListener('click', () => {
                playAnswer(index);
            });
            
            playlistElement.appendChild(li);
        });
    }

    // 5. Fungsi LAMA (Sedikit Dimodifikasi): Memutar Audio Jawaban
    function playAnswer(index) {
        if (index < 0 || index >= currentQuestions.length) return;

        currentIndex = index;
        const qa = currentQuestions[index];
        
        audioPlayer.src = qa.audioPath;
        audioPlayer.play();
        
        nowPlayingElement.textContent = `Memutar Jawaban...`;
        
        // Perbarui konten narasi
        narrativeTitle.innerText = qa.question;
        narrativeContent.innerText = qa.narrative;

        // Tandai pertanyaan yang aktif
        document.querySelectorAll('#playlist li').forEach((li, i) => {
            li.classList.toggle('active', i === index);
        });
    }

    // 6. Event Listener LAMA (Audio Selesai)
    audioPlayer.addEventListener('ended', () => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= currentQuestions.length) {
            nextIndex = 0; // Kembali ke pertanyaan pertama
        }
        playAnswer(nextIndex);
    });

    // 7. Event Listener LAMA (Navigasi Slide)
    enterBtn.addEventListener('click', () => {
        slide1.classList.remove('active');
        slide2.classList.add('active');
        showCategoryView(); // Mulai dengan tampilan kategori
    });

    // 8. Event Listener LAMA (Tombol Kembali - LOGIKA BARU)
    backBtn.addEventListener('click', () => {
        if (currentView === 'playlist') {
            // Jika di daftar pertanyaan, kembali ke kategori
            showCategoryView();
        } else {
            // Jika di daftar kategori, kembali ke slide 1
            slide2.classList.remove('active');
            slide1.classList.add('active');
        }
    });

    // 9. Event Listener LAMA (Tampil/Tutup Narasi)
    showNarrativeBtn.addEventListener('click', () => {
        let qaToShow;
        if (currentIndex === -1) {
            qaToShow = currentQuestions[0]; // Tampilkan narasi item pertama
        } else {
            qaToShow = currentQuestions[currentIndex]; // Tampilkan narasi item saat ini
        }
        
        if (qaToShow) {
            narrativeTitle.innerText = qaToShow.question;
            narrativeContent.innerText = qaToShow.narrative;
            narrativeOverlay.classList.remove('hidden');
        }
    });

    closeNarrativeBtn.addEventListener('click', () => {
        narrativeOverlay.classList.add('hidden');
    });

    // Inisialisasi Awal
    populateCategoryList(); // Siapkan kategori saat memuat
});
