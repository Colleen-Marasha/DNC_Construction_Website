import React, { useState } from 'react';

const BlogPage = () => {
  // Define your blog posts data here
 const blogPosts = [
  {
    id: 1,
    image: "https://placehold.co/800x450/FFD700/000000?text=Contractor+Choice", // Placeholder for original image
    title: "Post 1: Choosing the Right Contractor – Your Foundation for Success",
    date: "July 21, 2025",
    author: "DNC Team",
    category: "Tips & Guides",
    hook: "They say a house is only as strong as its foundation. We say a project is only as strong as the contractor you choose. Pick wrong, and you'll have cracks—literal and financial—before the paint dries.",
    keyPoints: [
      "Define Your Scope: Draw your blueprints, finalize your specs, and know your load requirements before hunting for contractors.",
      "Compare Bids: If a quote seems suspiciously low, it might be hollow like an unreinforced slab.",
      "Verify Credentials: No license? No deal. Insurance? Non-negotiable."
    ],
    humorBit: "If your contractor’s best tool is WhatsApp voice notes... time to pour that plan elsewhere.",
    content: [
      "Choosing the right contractor is paramount to the success of any construction project. It's not just about finding someone to build; it's about finding a partner who understands your vision, adheres to quality standards, and ensures safety throughout the process. A thorough vetting process, including checking references and past projects, can save you significant headaches and costs down the line.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we pride ourselves on our transparent practices, highly skilled team, and unwavering commitment to delivering projects that stand the test of time. We believe that a strong foundation, both in construction and in client relationships, is the key to mutual success."
    ]
  },
  {
    id: 2,
    image: "https://placehold.co/800x450/003366/FFFFFF?text=Sustainable+Building", // Placeholder for original image
    title: "Post 2: Sustainable Building Practices for a Greener Future",
    date: "July 18, 2025",
    author: "DNC Team",
    category: "Residential",
    hook: "Building today for a better tomorrow. Sustainable construction isn't just a trend; it's a necessity for environmental responsibility and long-term cost savings.",
    keyPoints: [
      "Eco-Friendly Materials: Utilizing recycled, renewable, and locally sourced materials reduces environmental impact.",
      "Energy Efficiency: Designing structures that minimize energy consumption through insulation, smart windows, and efficient HVAC systems.",
      "Waste Reduction: Implementing strategies to reduce construction waste through recycling and efficient planning."
    ],
    humorBit: "Our buildings are so green, they practically photosynthesize... almost.",
    content: [
      "Embracing sustainable building practices is crucial for the health of our planet and the efficiency of our projects. From the initial design phase to material selection and construction techniques, every step can contribute to a more environmentally friendly outcome. This not only benefits the environment but also provides long-term operational cost savings for property owners.",
      "DNC Construction is committed to integrating green building solutions into our projects, ensuring that we deliver structures that are not only robust and beautiful but also kind to the earth. We continuously research and adopt the latest in sustainable technologies and methods."
    ]
  },
  {
    id: 3,
    image: "https://placehold.co/800x450/FFD700/000000?text=Project+Management", // Placeholder for original image
    title: "Post 3: The Art of Project Management in Construction",
    date: "July 15, 2025",
    author: "DNC Team",
    category: "Commercial",
    hook: "A construction project is like a symphony; without a skilled conductor, it's just noise. Effective project management ensures harmony from blueprint to handover.",
    keyPoints: [
      "Planning & Scheduling: Meticulous planning is key to staying on track and within budget.",
      "Risk Management: Identifying and mitigating potential issues before they become costly problems.",
      "Communication: Clear and consistent communication among all stakeholders is vital for success."
    ],
    humorBit: "Our project managers don't just build buildings, they build unbreakable timelines... mostly.",
    content: [
      "Successful construction projects don't happen by accident; they are the result of meticulous planning, strategic execution, and expert management. Our project management philosophy focuses on anticipating challenges, optimizing resources, and fostering a collaborative environment.",
      "At DNC Construction, our dedicated project managers are the backbone of our operations, ensuring that every phase of your project is handled with precision, efficiency, and a commitment to achieving your goals."
    ]
  },
  {
    id: 4,
    image: "https://placehold.co/800x450/003366/FFFFFF?text=Safety+First", // Placeholder for original image
    title: "Post 4: Safety First: Our Unwavering Commitment on Site",
    date: "July 10, 2025",
    author: "DNC Team",
    category: "Safety",
    hook: "In construction, safety isn't just a rule; it's a culture. Protecting our team and clients is our highest priority, ensuring every project is completed without compromise.",
    keyPoints: [
      "Rigorous Training: Continuous training programs for all personnel on the latest safety protocols.",
      "Regular Inspections: Daily site inspections to identify and rectify potential hazards.",
      "Emergency Preparedness: Comprehensive plans and drills for any unforeseen circumstances."
    ],
    humorBit: "Our safety gear is so advanced, it comes with its own theme music. (Disclaimer: Music sold separately.)",
    content: [
      "The safety and well-being of our workforce, clients, and the public are non-negotiable at DNC Construction. We adhere to the strictest safety standards and continuously invest in training and equipment to create a secure working environment. Our proactive approach to safety minimizes risks and ensures that every project proceeds smoothly and securely.",
      "We believe that a strong safety culture not only protects lives but also enhances productivity and builds trust. It's a testament to our commitment to excellence in every aspect of our operations."
    ]
  },
  {
    id: 5,
    image: "https://placehold.co/800x450/FFD700/000000?text=Future+Trends", // Placeholder for original image
    title: "Post 5: Future Trends in Civil Engineering & Construction",
    date: "July 05, 2025",
    author: "DNC Team",
    category: "Infrastructure",
    hook: "The future of construction is here, and it's smarter, faster, and more sustainable. Discover the innovations shaping our industry.",
    keyPoints: [
      "Digital Transformation: BIM (Building Information Modeling) and digital twins are revolutionizing design and collaboration.",
      "Modular Construction: Prefabricated components are speeding up build times and reducing waste.",
      "Advanced Materials: Self-healing concrete and smart materials are enhancing durability and performance."
    ],
    humorBit: "Soon, our buildings will be so smart, they'll be correcting our grammar. We're ready.",
    content: [
      "The civil engineering and construction industry is on the cusp of a major transformation, driven by technological advancements and a growing emphasis on sustainability. From artificial intelligence to robotics, new tools are emerging that promise to make construction more efficient, safer, and environmentally friendly.",
      "DNC Construction is at the forefront of adopting these innovations, ensuring that our projects benefit from the latest advancements. We are committed to shaping the future of construction, one intelligent build at a time."
    ]
  },
  {
    id: 6,
    image: "./images/logo.png", // one.jpg
    title: "Post 1: Choosing the Right Contractor – Your Foundation for Success",
    date: "July 26, 2025", // Adjusted date for new series
    author: "Colleen Marasha",
    category: "Tips & Guides",
    hook: "They say a house is only as strong as its foundation. We say a project is only as strong as the contractor you choose. Pick wrong, and you'll have cracks—literal and financial—before the paint dries.",
    keyPoints: [
      "Define Your Scope: Draw your blueprints, finalize your specs, and know your load requirements before hunting for contractors.",
      "Compare Bids: If a quote seems suspiciously low, it might be hollow like an unreinforced slab.",
      "Verify Credentials: No license? No deal. Insurance? Non-negotiable."
    ],
    humorBit: "If your contractor’s best tool is WhatsApp voice notes... time to pour that plan elsewhere.",
    content: [
      "Choosing the right contractor is paramount to the success of any construction project. It's not just about finding someone to build; it's about finding a partner who understands your vision, adheres to quality standards, and ensures safety throughout the process. A thorough vetting process, including checking references and past projects, can save you significant headaches and costs down the line.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we pride ourselves on our transparent practices, highly skilled team, and unwavering commitment to delivering projects that stand the test of time. As we say, 'Tinovaka zveupenyu' – we build structures that truly endure, ensuring your investment is solid for generations."
    ]
  },
  {
    id: 7,
    image: "./images/inspection.png", // two.jpg
    title: "Post 2: Why a Good Site Inspection Saves You Money (and Headaches)",
    date: "July 27, 2025", // Adjusted date for new series
    author: "Colleen Marasha",
    category: "Safety",
    hook: "Think of site inspections as your project's medical check-ups. Skip them, and you might need intensive care—on your budget.",
    keyPoints: [
      "Soil Tests Matter: Because clay, sand, and rock aren't just geology—they dictate your foundation design.",
      "Drainage & Access: Poor drainage now = swimming pool later (and not the fun kind).",
      "Survey Control: A few millimeters off today can turn into a staircase that “mysteriously” floats tomorrow."
    ],
    humorBit: "Skipping soil tests is like guessing a building's height by counting bricks from the outside. Don't do it.",
    content: [
      "A meticulous site inspection is the bedrock of a successful construction project. It's where potential issues are identified and addressed before they escalate into costly problems or delays. Our commitment to thorough inspections ensures every detail, from soil composition to drainage, is accounted for.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we don't just build; we build smart, ensuring every foundation is solid. 'Tinovaka zveupenyu' – we build structures that stand the test of time, and that begins with a flawless start."
    ]
  },
  {
    id: 8,
    image: "./images/concrete.png", // three.jpg
    title: "Post 3: Concrete Truths – Getting Mix Design Right",
    date: "July 28, 2025", // Adjusted date for new series
    author: "Colleen Marasha",
    category: "Tips & Guides",
    hook: "Concrete isn't just ‘cement and water’—it’s a science. Mix it wrong, and your building could become a modern art installation.",
    keyPoints: [
      "Strength Class: C25 or C30 isn’t random—it’s structural insurance.",
      "Curing is Caring: Ignore curing, and watch your concrete crack like overbaked bread.",
      "Quality Control: Slump tests and cube tests are non-negotiable if you like your walls upright."
    ],
    humorBit: "Pouring concrete without curing it? That’s like baking a cake and eating it raw—messy and full of regrets.",
    content: [
      "The strength and longevity of any concrete structure depend heavily on getting the mix design just right. It's a precise balance of aggregates, cement, and water, tailored to specific environmental conditions and structural requirements. Our experts meticulously design and test concrete mixes to ensure optimal performance and durability.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we understand that concrete is the backbone of many projects. We ensure every pour is perfect, because 'Tinovaka zveupenyu' – we build structures that stand the test of time, and that includes the very core of your build."
    ]
  },
  {
    id: 9,
    image: "./images/budget.png", // four.jpg
    title: "Post 4: Budgeting in Construction – Avoiding Cost Overruns",
    date: "July 29, 2025", // Adjusted date for new series
    author: "Colleen Marasha",
    category: "Tips & Guides",
    hook: "Budgets in construction are like Gantt charts—they look perfect until reality swings a hammer.",
    keyPoints: [
      "Detailed BOQ (Bill of Quantities): Vague numbers = surprise invoices.",
      "Contingency Fund: Allocate 10-15% for “unforeseen works” (aka Murphy’s Law).",
      "Track Variations: Change orders are like termites—they start small, then eat your house if unchecked."
    ],
    humorBit: "If your project is still on its original budget after 6 months, congratulations—you’ve unlocked legendary status.",
    content: [
      "Effective budgeting is crucial for keeping any construction project on track and avoiding unexpected financial burdens. A detailed Bill of Quantities (BOQ) and a well-managed contingency fund are indispensable tools for financial stability. We emphasize transparent cost management and proactive tracking of all variations to ensure your project stays within its financial parameters.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we believe in clear financial planning to support our robust builds. 'Tinovaka zveupenyu' – we build structures that stand the test of time, and that includes ensuring your financial foundation is just as strong."
    ]
  },
  {
    id: 10,
    image: "./images/AngryContractor.png", // five.jpg
    title: "Post 5: Communication on Site – Why It's Your Strongest Beam",
    date: "July 30, 2025", // Adjusted date for new series
    author: "Colleen Marasha",
    category: "Project Management",
    hook: "Great communication is like good reinforcement: invisible but holding everything together.",
    keyPoints: [
      "Daily Reports & Updates: Keep them as regular as coffee breaks.",
      "Clear Channels: No, not just WhatsApp groups—proper logs and site meetings matter.",
      "Issue Resolution: Problems grow when ignored; treat them like cracks in plaster—patch early."
    ],
    humorBit: "A contractor who ghosts you during construction? Red flag! This isn't a dating app.",
    content: [
      "Seamless communication is the unsung hero of every successful construction project. It ensures that all stakeholders—from clients to contractors and suppliers—are aligned, informed, and ready to address challenges proactively. We implement robust communication protocols, including daily updates and formal site meetings, to maintain transparency and efficiency.",
      "At D.N.C CIVIL ENGINEERING & CONSTRUCTION, we prioritize open dialogue because we know it's the strongest beam supporting any project. 'Tinovaka zveupenyu' – we build structures that stand the test of time, and strong communication is fundamental to that enduring quality."
    ]
  }
];


  // Define your categories here
  const categories = ["All Posts", "Residential", "Commercial", "Infrastructure", "Safety", "Tips & Guides"];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Posts"); // New state for selected category
  const [selectedPostId, setSelectedPostId] = useState(null); // New state for selected single post
  const postsPerPage = 2; // Display 2 posts per page

  // Filter posts by selected category
  const filteredPosts = selectedCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate the posts to display on the current page based on filteredPosts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages based on filteredPosts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Function to change page
  const paginate = (pageNumber) => {
    setSelectedPostId(null); // Clear selected post when paginating
    setCurrentPage(pageNumber);
  };

  // Function for Next button
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setSelectedPostId(null); // Clear selected post when paginating
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for Previous button
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setSelectedPostId(null); // Clear selected post when paginating
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
    setSelectedPostId(null); // Clear selected post when category changes
  };

  // Function to handle clicking on a recent post title
  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    setSelectedCategory("All Posts"); // Reset category filter when viewing a single post
    setCurrentPage(1); // Reset pagination when viewing a single post
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Find the single post to display if selectedPostId is set
  const singlePost = blogPosts.find(post => post.id === selectedPostId);

  return (
    <section id="blog-page" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <h2 className="text-center mb-5 text-dark">Building Smarter with D.N.C Construction</h2>
        <div className="row">
          {/* Main Blog Content Area */}
          <div className="col-lg-8">
            {selectedPostId && singlePost ? ( // Render single post if selected
              <article key={singlePost.id} className="card shadow-sm mb-4">
                {/* Blog Post Image */}
                <img
                  src={singlePost.image}
                  className="card-img-top"
                  alt={singlePost.title}
                />
                <div className="card-body">
                  {/* Blog Post Title */}
                  <h3 className="card-title text-dark mb-3">{singlePost.title}</h3>
                  <p className="card-text text-muted small">Published on {singlePost.date} by {singlePost.author}</p>
                  <p className="card-text text-muted small">Category: {singlePost.category}</p> {/* Display category */}

                  {/* Opening Hook */}
                  <p className="card-text text-secondary lead">
                    {singlePost.hook}
                  </p>

                  {/* Key Points */}
                  <h4 className="text-dark mt-4 mb-3">Key Points:</h4>
                  <ul className="list-group list-group-flush mb-4">
                    {singlePost.keyPoints.map((point, index) => (
                      <li key={index} className="list-group-item bg-light text-secondary">
                        <i className="fas fa-check-circle text-golden me-2"></i>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Humor Bit */}
                  <blockquote className="blockquote text-center border-start border-golden border-5 ps-3 py-2 bg-light rounded">
                    <p className="mb-0 text-dark fst-italic">
                      "{singlePost.humorBit}"
                    </p>
                  </blockquote>

                  {/* More content */}
                  {singlePost.content.map((paragraph, index) => (
                    <p key={index} className="card-text text-secondary mt-4">
                      {paragraph}
                    </p>
                  ))}
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => setSelectedPostId(null)} // Button to go back to all posts
                  >
                    Back to All Posts
                  </button>
                </div>
              </article>
            ) : ( // Render paginated posts if no single post is selected
              currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <article key={post.id} className="card shadow-sm mb-4">
                    {/* Blog Post Image */}
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                    />
                    <div className="card-body">
                      {/* Blog Post Title */}
                      <h3 className="card-title text-dark mb-3">{post.title}</h3>
                      <p className="card-text text-muted small">Published on {post.date} by {post.author}</p>
                      <p className="card-text text-muted small">Category: {post.category}</p> {/* Display category */}

                      {/* Opening Hook */}
                      <p className="card-text text-secondary lead">
                        {post.hook}
                      </p>

                      {/* Key Points */}
                      <h4 className="text-dark mt-4 mb-3">Key Points:</h4>
                      <ul className="list-group list-group-flush mb-4">
                        {post.keyPoints.map((point, index) => (
                          <li key={index} className="list-group-item bg-light text-secondary">
                            <i className="fas fa-check-circle text-golden me-2"></i>
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Humor Bit */}
                      <blockquote className="blockquote text-center border-start border-golden border-5 ps-3 py-2 bg-light rounded">
                        <p className="mb-0 text-dark fst-italic">
                          "{post.humorBit}"
                        </p>
                      </blockquote>

                      {/* More content */}
                      {post.content.map((paragraph, index) => (
                        <p key={index} className="card-text text-secondary mt-4">
                          {paragraph}
                        </p>
                      ))}
                      <button
                        className="btn btn-outline-primary mt-3"
                        onClick={() => handlePostClick(post.id)} // View single post
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="alert alert-info text-center" role="alert">
                  No posts found for the selected category.
                </div>
              )
            )}


            {/* Pagination Controls - Only show if not viewing a single post and there are enough posts */}
            {!selectedPostId && filteredPosts.length > postsPerPage && (
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); goToPreviousPage(); }} aria-label="Previous">
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                      <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); paginate(i + 1); }}>
                        {i + 1}
                      </a>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); goToNextPage(); }} aria-label="Next">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4 bg-dark text-white">
              <div className="card-body">
                <h4 className="card-title text-golden mb-3">Recent Posts</h4>
                <ul className="list-unstyled">
                  {/* Dynamically list recent posts from the series */}
                  {blogPosts.slice(0, 3).map(post => ( // Show top 3 recent posts
                    <li key={post.id} className="mb-2">
                      <a
                        href="#"
                        className="text-white text-decoration-none"
                        onClick={(e) => { e.preventDefault(); handlePostClick(post.id); }} // Make recent post titles clickable
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card shadow-sm bg-dark text-white">
              <div className="card-body">
                <h4 className="card-title text-golden mb-3">Categories</h4>
                <ul className="list-unstyled">
                  {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href="#"
                        className={`text-white text-decoration-none ${selectedCategory === category ? 'fw-bold text-warning' : ''}`}
                        onClick={(e) => { e.preventDefault(); handleCategorySelect(category); }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
