// app/api/non-fiction/route.ts
import { NextResponse } from "next/server";

const books = [
    {
      id: 1,
      title: "History's Pages",
      author: "Jean Grainger",
      price: "$8",
      image: "/non-fiction/nf1.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "In 1940, as World War II engulfs the world, an extraordinary friendship blossoms across the Atlantic. Grace Fitzgerald, a woman living in the quiet Irish village of Knocknashee, and Richard Lewis, an adventurous war correspondent from Savannah, Georgia, form a bond that transcends time and place. Despite the devastation of the war, their connection grows stronger, as Grace struggles with life in neutral Ireland, and Richard faces the horrors of reporting from London, a city under constant bombardment. As the war rages on, both must make life-altering choices that challenge their beliefs and test their resilience. History’s Pages is a compelling narrative of friendship, love, and the human spirit during one of the most turbulent times in history. Fans of historical fiction with emotional depth and rich character development will find this novel an unforgettable journey."
    },
    {
      id: 2,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      price: "$15",
      image: "/non-fiction/nf2.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**Sapiens** takes readers on an epic journey through the history of humankind, from the emergence of Homo sapiens in Africa to the present day. Harari examines how humans became the dominant species on Earth, delving into the evolution of our biology, culture, and societies. He explores the cognitive revolution, which enabled humans to outcompete other species, the agricultural revolution, which transformed our way of life, and the unification of human societies under shared ideologies and religions. Harari also questions the future of humanity, as technological advancements like artificial intelligence and genetic engineering challenge our ideas of what it means to be human. Thought-provoking and intellectually stimulating, Sapiens is a must-read for anyone interested in understanding the forces that have shaped human history and the direction in which we are heading."
    },
    {
      id: 3,
      title: "Educated",
      author: "Tara Westover",
      price: "$10",
      image: "/non-fiction/nf3.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**Educated is a powerful memoir by Tara Westover**, recounting her extraordinary journey from a strict, survivalist upbringing in rural Idaho to earning a PhD from the University of Cambridge. Raised by parents who rejected formal education, Tara was largely isolated from mainstream society and deprived of basic schooling. Despite these challenges, she teaches herself enough to pass the ACT exam and eventually leaves her isolated mountain home to pursue an education. The book explores the emotional and intellectual toll of breaking away from her family and community, as well as the transformative power of education. It’s an inspiring story of perseverance, self-discovery, and the courage to challenge the beliefs that bind us."
    },
    {
      id: 4,
      title: "Becoming",
      author: "Michelle Obama",
      price: "$18",
      image: "/non-fiction/nf4.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "Becoming is a deeply personal memoir by **Michelle Obama**, chronicling her life from her childhood in Chicago to her time as First Lady of the United States. In the book, Michelle reflects on the challenges and triumphs that shaped her identity, from growing up in a working-class family to navigating the complexities of being the first African American First Lady. She discusses her education, her marriage to Barack Obama, her role as a mother, and her initiatives as First Lady. With honesty and vulnerability, Michelle explores themes of race, gender, identity, and the importance of staying true to oneself. Becoming is not just a memoir of a public figure but also an inspiring account of overcoming adversity and finding one’s voice."
    },
    {
      id: 5,
      title: "The Wright Brothers",
      author: "David McCullough",
      price: "$14",
      image: "/non-fiction/nf5.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**The Wright Brothers by David McCullough** is the remarkable story of Orville and Wilbur Wright, the two brothers who defied the odds to achieve one of humanity’s greatest accomplishments: the first powered flight. McCullough chronicles their humble beginnings in Dayton, Ohio, their relentless pursuit of flight, and the challenges they faced in a time when aviation was considered impossible. The book also explores their relationship, the deep bond they shared, and their quiet determination to push the boundaries of technology. Through meticulous research, McCullough paints a portrait of two men who were not only visionary inventors but also pioneers in the quest for human progress. The Wright Brothers is a compelling narrative of ingenuity, persistence, and the pursuit of a dream."
    },
    {
      id: 6,
      title: "Into the Wild",
      author: "Jon Krakauer",
      price: "$13",
      image: "/non-fiction/nf6.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**Into the Wild** tells the true story of Christopher McCandless, a young man who, after graduating from Emory University, abandoned his conventional life and set out on a journey into the Alaskan wilderness. Leaving behind his family, McCandless gave away his savings and assumed a new identity, seeking to live in isolation and self-sufficiency. Krakauer explores McCandless’s motivations and the events leading up to his tragic death, delving into the philosophical questions that underpin his journey. The book also raises issues about family, idealism, and the dangers of seeking meaning in the wild without preparation. Into the Wild is a thought-provoking exploration of the quest for freedom and the complexity of human desires."
    },
    {
      id: 7,
      title: "The Glass Castle",
      author: "Jeannette Walls",
      price: "$11",
      image: "/non-fiction/nf7.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**The Glass Castle is a memoir by Jeannette Walls** about her unconventional and often troubled childhood. Raised by parents who were gifted but dysfunctional, Walls recounts the hardships she endured while moving from one dilapidated home to another. Despite her parents' irresponsibility, Walls’s determination and grit helped her eventually escape her chaotic upbringing. The book explores themes of family loyalty, resilience, and the complexities of love in a difficult environment. The Glass Castle is a moving and poignant story about overcoming adversity, the strength of the human spirit, and the impact of a fractured childhood."
    },
    {
      id: 8,
      title: "Unbroken",
      author: "Laura Hillenbrand",
      price: "$16",
      image: "/non-fiction/nf8.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**Unbroken tells the incredible true story of Louis Zamperini**, a former Olympic athlete and World War II bombardier who survived being shot down, drifting at sea, and being a prisoner of war in Japan. Hillenbrand details his harrowing experiences in captivity and the psychological and physical toll they took on him. But despite the brutal conditions, Zamperini’s spirit never broke. Unbroken is an inspiring testament to the strength of the human will, illustrating how the power of hope, endurance, and forgiveness can help someone survive the most unimaginable hardships."
    },
    {
      id: 9,
      title: "The Code Breaker",
      author: "Walter Isaacson",
      price: "$17",
      image: "/non-fiction/nf9.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**The Code Breaker** tells the fascinating story of Jennifer Doudna, the biochemist who helped develop CRISPR gene-editing technology, revolutionizing biology and genetics. Isaacson explores Doudna’s life and work, including the ethical dilemmas surrounding genetic engineering and the future potential of the technology. The book dives deep into the science of gene-editing and the debate over its applications, from curing genetic diseases to altering the human genome. The Code Breaker is an exciting, informative, and timely exploration of one of the most groundbreaking scientific innovations of our time."
    },
    {
      id: 10,
      title: "The Power of Habit",
      author: "Charles Duhigg",
      price: "$12",
      image: "/non-fiction/nf10.jpg",
      category: "non-fiction",
      categoryId: 2,
      description: "**The Power of Habit** explains the science behind how habits are formed and why they are so powerful. Duhigg explores the neurological mechanisms that create habits and how they can be changed, providing practical advice for individuals looking to break bad habits or create positive ones. The book also delves into how habits influence organizations and societies, showing that understanding habits can lead to transformative changes in our personal and professional lives. The Power of Habit is an enlightening and actionable guide to understanding and harnessing the power of habits for personal growth and success."
    }
  ]
  

 export async function GET(req: Request) {
     const url = new URL(req.url);
     const pathSegments = url.pathname.split("/");
   
     const id = pathSegments[pathSegments.length - 1];  // Extract the book ID from the URL
   
     if (id && !isNaN(Number(id))) {
       const book = books.find((book) => book.id === parseInt(id, 10));  
       if (book) {
         return NextResponse.json(book);  
       } else {
         return NextResponse.json({ error: "Book not found" }, { status: 404 });  
       }
     } else {
       return NextResponse.json({ error: "Invalid ID" }, { status: 400 });  
     }
   }