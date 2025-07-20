const platforms = [
  {
    name: "NxtWave",
    logo: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
    category: "Coding",
    tag: "Paid, Self-paced",
    description: "Future-ready tech programs for students and professionals.",
    link: "https://www.ccbp.in"
  },
  {
    name: "Udemy",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
    category: "Coding",
    tag: "Paid, Self-paced",
    description: "Affordable courses on development, business, and more.",
    link: "https://www.udemy.com"
  },
  {
    name: "Coursera",
    logo: "https://media.licdn.com/dms/image/v2/D4D12AQHFNRDblsU1xQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677528528545?e=2147483647&v=beta&t=eyPCiiFetWz9wC8A-2TM_Whvul7DwcZQouin8svwJfc",
    category: "Career",
    tag: "Free/Paid, Self-paced",
    description: "University-certified programs and skill development.",
    link: "https://www.coursera.org"
  },
  {
    name: "Unacademy",
    logo: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/unacademy-sixteen_nine.png?size=1200:675",
    category: "UPSC",
    tag: "Paid, Live",
    description: "Live classes for UPSC, JEE, and more by top educators.",
    link: "https://unacademy.com"
  },
  {
    name: "Vedantu",
    logo: "https://images.jdmagicbox.com/v2/comp/bangalore/a9/080pxx80.xx80.150324125636.i1a9/catalogue/vedantu-com-hsr-layout-bangalore-tutorials-for-class-x-1fiuhmb.jpg",
    category: "IIT-JEE",
    tag: "Paid, Live",
    description: "Live online tutoring for JEE, NEET, and school classes.",
    link: "https://www.vedantu.com"
  },
  {
    name: "Scaler",
    logo: "https://www.financialexpress.com/wp-content/uploads/2023/10/image-2023-10-18T133423.275.jpg",
    category: "Coding",
    tag: "Paid, Live",
    description: "Career-focused coding programs and mentorship.",
    link: "https://www.scaler.com"
  },
  {
    name: "PW Skills",
    logo: "https://bl-i.thgim.com/public/incoming/sv1jtv/article67134385.ece/alternates/LANDSCAPE_1200/physics%20wallah%20skills.jpg",
    category: "Coding",
    tag: "Paid, Self-paced",
    description: "Affordable and job-ready tech learning.",
    link: "https://pwskills.com"
  },
  {
    name: "Great Learning",
    logo: "https://idss.mit.edu/wp-content/uploads/2025/02/great-learning-logo-white-bg.png",
    category: "Career",
    tag: "Paid, Self-paced",
    description: "Master’s and certificate programs in tech & business.",
    link: "https://www.mygreatlearning.com"
  },
  {
    name: "Internshala",
    logo: "https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1725020909962-clipboard%20(8).webp&w=3840&q=75",
    category: "Career",
    tag: "Free/Paid, Self-paced",
    description: "Internships, jobs, and career training in one place.",
    link: "https://internshala.com"
  },
  {
    name: "Skill-Lync",
    logo: "https://assets.thehansindia.com/h-upload/2022/03/31/1284587-skill-lync.jpg",
    category: "Engineering",
    tag: "Paid, Live",
    description: "Advanced courses for core engineering students.",
    link: "https://skill-lync.com"
  }
];

function renderCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  data.forEach(platform => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
      <div class="card h-100 p-3" data-aos="fade-up">
        <div class="text-center mb-3">
          <img src="${platform.logo}" alt="${platform.name} logo" class="img-fluid" style="height: 60px;" onerror="this.src='https://via.placeholder.com/80'"/>
        </div>
        <h5 class="fw-bold">${platform.name}</h5>
        <p><strong>Category:</strong> ${platform.category}</p>
        <p><strong>Tags:</strong> ${platform.tag}</p>
        <p class="text-muted small">${platform.description}</p>
        <a href="${platform.link}" target="_blank" class="btn btn-primary mt-auto">Visit Website</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", filterPlatforms);
document.getElementById("categoryFilter").addEventListener("change", filterPlatforms);

function filterPlatforms() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const filtered = platforms.filter(platform =>
    platform.name.toLowerCase().includes(search) &&
    (category === "" || platform.category === category)
  );

  renderCards(filtered);
}

renderCards(platforms);