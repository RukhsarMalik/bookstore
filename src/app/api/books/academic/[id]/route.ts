
import { NextResponse } from "next/server";

const books = [
    {
      id: 1,
      title: "Introduction to Linear Algebra",
      author: "Gilbert Strang",
      price: "$35",
      image: "/academic/a1.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Introduction to Linear Algebra** is a comprehensive guide to the concepts of linear algebra. Written by renowned MIT professor Gilbert Strang, the book covers topics such as matrix operations, vector spaces, and eigenvalues, making it ideal for students beginning their journey into higher mathematics. Strang's clear explanations and practical examples make this a must-read for anyone interested in understanding the mathematical foundations of engineering, physics, and computer science."
    },
    {
      id: 2,
      title: "The Art of Public Speaking",
      author: "Stephen E. Lucas",
      price: "$40",
      image: "/academic/a2.jpg",
      category: "academic",
      categoryId: 3,
      description: "**The Art of Public Speaking by Stephen E.** Lucas is a definitive resource on mastering the art of speaking in front of an audience. With insights into preparing and delivering impactful speeches, this book helps students and professionals alike build confidence and improve their communication skills. Covering aspects such as audience analysis, speech organization, and delivery techniques, this guide is perfect for anyone looking to enhance their public speaking abilities."
    },
    {
      id: 3,
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      price: "$50",
      image: "/academic/a3.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Principles of Economics by N. Gregory Mankiw** is one of the most widely used textbooks for introductory economics courses. Mankiw presents key economic concepts like supply and demand, market structures, and the role of government in a clear and engaging way. The book includes real-world examples and data, helping students understand complex topics in economics and their relevance to everyday life."
    },
    {
      id: 4,
      title: "Organic Chemistry",
      author: "David R. Klein",
      price: "$60",
      image: "/academic/a4.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Organic Chemistry by David R. Klein** is a detailed and accessible textbook that offers a comprehensive introduction to organic chemistry. Klein explains complex topics, such as chemical bonding, reaction mechanisms, and stereochemistry, with clarity and precision. Designed for students in chemistry and related fields, this book combines theoretical knowledge with practical applications, making it a crucial resource for anyone studying organic chemistry."
    },
    {
      id: 5,
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      price: "$45",
      image: "/academic/a5.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Calculus: Early Transcendentals by James Stewart** is one of the most popular textbooks for calculus courses. With a focus on concepts such as limits, derivatives, and integrals, the book presents calculus in an intuitive and structured manner. Stewart provides students with a strong foundation in mathematical theory, while also offering a variety of practical problems to solve. It's an essential textbook for students pursuing mathematics, engineering, or physical sciences."
    },
    {
      id: 6,
      title: "Introduction to Psychology",
      author: "James W. Kalat",
      price: "$38",
      image: "/academic/a6.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Introduction to Psychology by James W. Kalat** is a comprehensive textbook that covers a wide range of topics within the field of psychology. From the basics of brain function and behavior to social psychology and mental disorders, Kalat's writing is both engaging and scientifically rigorous. This book is ideal for students beginning their exploration of psychology, providing a solid foundation in both theoretical and practical aspects of the field."
    },
    {
      id: 7,
      title: "The Elements of Style",
      author: "William Strunk Jr. and E.B. White",
      price: "$12",
      image: "/academic/a7.jpg",
      category: "academic",
      categoryId: 3,
      description: "**The Elements of Style** is a classic guide to writing clearly and effectively. Originally written by William Strunk Jr. and later revised by E.B. White, this concise book offers timeless advice on grammar, punctuation, and style. It's widely used by students, writers, and professionals looking to improve their writing skills and communicate with precision."
    },
    {
      id: 8,
      title: "The Oxford English Dictionary",
      author: "Oxford University Press",
      price: "$200",
      image: "/academic/a8.jpg",
      category: "academic",
      categoryId: 3,
      description: "**The Oxford English Dictionary** is the definitive record of the English language, providing comprehensive definitions and historical information about every word in the English lexicon. With detailed etymologies and usage notes, it is an indispensable resource for linguists, historians, and anyone with a passion for words. This dictionary is a monumental work, offering in-depth coverage of over 600,000 words and their meanings."
    },
    {
      id: 9,
      title: "Biology: The Unity and Diversity of Life",
      author: "Cecie Starr and Ralph Taggart",
      price: "$55",
      image: "/academic/a9.jpg",
      category: "academic",
      categoryId: 3,
      description: "**Biology: The Unity and Diversity of Life** is a comprehensive textbook designed to introduce students to the study of biology. Written by Cecie Starr and Ralph Taggart, the book explores the fundamental principles of life, from the structure of cells to the complex interactions of ecosystems. The authors present the material with clarity and include numerous examples, illustrations, and activities to help students grasp important concepts."
    },
    {
      id: 10,
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      price: "$18",
      image: "/academic/a10.jpg",
      category: "academic",
      categoryId: 3,
      description: "**A Short History of Nearly Everything by Bill Bryson** is an accessible and engaging exploration of the natural world, science, and human knowledge. Bryson takes readers on a journey through the history of the universe, from the Big Bang to the emergence of life on Earth. He explores topics ranging from physics to geology to biology, providing a clear and entertaining overview of the most fascinating aspects of science. This book is perfect for anyone curious about the world around them and the forces that have shaped our existence."
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