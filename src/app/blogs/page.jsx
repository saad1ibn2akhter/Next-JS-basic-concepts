import React from 'react';

const page = () => {
    return (
        <div className='h-screen'>
            this is blogs page here!!!

            <div className='p-10  border-2 border-red-200'>
                {
                    blogs.map((blog, index) => <>
                        <div className='border-violet-400 border-2 p-2 m-3' key={blog?.slug}>
                            <h1>{blog?.title}</h1>
                            <p>{blog?.description}</p>
                        </div>
                    </>
                    )
                }
            </div>
        </div>
    );
};

export default page;

const blogs = [
    {
        "slug": "how-to-start-a-successful-blog",
        "title": "How to Start a Successful Blog: A Step-by-Step Guide",
        "description": "Discover the essential steps to launch a blog that not only captures readers' attention but also generates traffic. This guide covers everything from choosing the right niche to mastering SEO, ensuring your blog's long-term success."
    },
    {
        "slug": "mastering-remote-work-tips-and-tools",
        "title": "Mastering Remote Work: Tips and Tools for Productivity",
        "description": "As remote work becomes the norm, it is crucial to stay productive and connected. Explore the best tools and strategies for maximizing efficiency while working from home, including time management tips and collaboration tools."
    },
    {
        "slug": "ultimate-guide-to-healthy-eating",
        "title": "The Ultimate Guide to Healthy Eating: Tips for a Balanced Diet",
        "description": "Navigating the world of nutrition can be overwhelming. This blog breaks down the basics of healthy eating, offering practical tips for creating a balanced diet that supports your health goals without sacrificing flavor."
    },
    {
        "slug": "travel-on-a-budget-tips-for-adventurous-souls",
        "title": "Travel on a Budget: Tips for Adventurous Souls",
        "description": "Dreaming of traveling the world without breaking the bank? Learn how to explore new destinations on a budget with our expert advice on affordable accommodation, cheap flights, and budget-friendly activities."
    },
    {
        "slug": "understanding-ai-and-its-impact-on-business",
        "title": "Understanding AI and Its Impact on Business",
        "description": "Artificial Intelligence is transforming industries across the globe. This blog explores how AI is reshaping business processes, enhancing efficiency, and creating new opportunities, while also addressing potential challenges and ethical considerations."
    },
    {
        "slug": "mindfulness-for-beginners",
        "title": "Mindfulness for Beginners: How to Start Your Practice",
        "description": "Interested in mindfulness but not sure where to begin? This beginners guide to mindfulness covers simple techniques to incorporate mindfulness into your daily life, helping you reduce stress, increase focus, and improve overall well-being."
    }
]
