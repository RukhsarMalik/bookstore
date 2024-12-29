import { NextResponse } from "next/server";

const books = [
    {
      id: 1,
      title: "Peer-e-Kamil",
      author: "Umera Ahmed",
      price: "$10",
      image: "/urdu/u1.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**“Peer-e-Kamil”** by Umera Ahmed is a standout work in Urdu literature, known for its depth beyond the usual romance novel. This book explores themes of faith, love, and self-discovery, leaving readers with a profound sense of reflection.\nThe story follows two central characters: Salaar Sikandar and Imama Hashim. Salaar is a brilliant young man with a restless spirit, constantly questioning the meaning of life. In contrast, Imama comes from a stable, religious background and carries a quiet strength. Their lives intersect in an unexpected way, sparking an intense journey for both.\nAs the plot unfolds, Salaar undergoes a powerful transformation, shifting from internal conflict to finding inner peace. Imama, a devout and resilient woman, faces hardships due to her steadfast commitment to her beliefs.\nThis novel is far more than a love story; it’s a tale of spiritual awakening and profound change. Set against the varied landscapes of Islamabad, America, Paris, and Lahore, the story brings a unique, immersive feel to the journey of these characters."
    },
    {
      id: 2,
      title: "Jannat key Pattay",
      author: "Nimra Ahmed",
      price: "$12",
      image: "/urdu/u2.jpg",
      category: "urdu",
      categoryId: 4,
      description: "Haya Suleman, an LLB (Hons) student, receives a scholarship to study in Turkey, but her plans take a dark turn when a private video of her surfaces online. Desperate to keep it from her traditional family, she contacts a Cyber Crime Cell officer who offers help—but he knows more about her than he should.\nAs Haya navigates this mystery, she faces the challenge of removing the video, going to Turkey, and possibly meeting the one person she's been searching for. *Jannat Kay Pattay* (Leaves of Heaven) is a thrilling ride filled with secrets, surprises, and twists that will keep you guessing until the end."
    },
    {
      id: 3,
      title: "Halim",
      author: "Nimra Ahmed",
      price: "$14",
      image: "/urdu/u3.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Haalim** revolves around dream interpretation and the intriguing concept of time travel. Set primarily in Malaysia and the historical Malaka, the narrative intertwines the lives of its central characters – Fateh, Taalia, and Adam – against the backdrop of political maneuvers. Fateh is an aspiring politician, eager to change the political landscape of Malaysia, Taalia is a con artist with various identities, and Adam, a man struggling with self-esteem issues. These characters, despite their differences, share entwined storylines and evolve through their personal growth throughout the novel."
    },
    {
      id: 4,
      title: "Kara-koram Ka Taj Mahal",
      author: "Nimra Ahmed",
      price: "$13",
      image: "/urdu/u4.jpg",
      category: "urdu",
      categoryId: 4,
      description: "Beautifully written, this novel invites readers to fall in love with the majestic Karakoram, especially *The Karakoram Ka Taj Mahal*. It feels like a fairy tale where a prince comes searching for his long-awaited fairy. Yet, the story takes a tragic turn, with the deaths of Irsa, Ahmat, and others leaving a deep sense of sadness. Despite the sorrow, the narrative reflects the essence of life—its unpredictability and the unforeseen challenges that await us. The tragedies depicted may instill a sense of trepidation about conquering towering mountains, but the novel also brims with fascinating insights into the world of hiking. The ending beautifully encapsulates the unwavering passion of mountain-climbing enthusiasts, making it a poignant tribute to their spirit."
    },
    {
      id: 5,
      title: "Namal",
      author: "Nimra Ahmed",
      price: "$16",
      image: "/urdu/u5.jpg",
      category: "urdu",
      categoryId: 4,
      description: "The novel is named after a chapter in the Quran, Surah An-Naml, which means “The Ants”. The author has skillfully woven the verses and meanings of this surah into the plot and the characters of the novel. The novel revolves around a multiple murder case. Faris Ghazi, an intelligence officer, is accused of killing his step-brother, his wife, and attempting to kill his cousin Zumar Yusuf. However, his nephew Saadi Yusuf believes in his innocence and fights to prove it in court. On the other hand, Zumar, who is a district attorney and lost her kidneys in the attack, is convinced that Faris is guilty and wants him to pay for his crimes. Hashim Kardaar is the real culprit behind the murders. He is a corrupt lawyer and oil tycoon, and also happens to be Faris’s first cousin with a personal vendetta against him. Hashim and his mother Jawahirat become caught up in a complex web of conspiracies and deception. They manipulate reality and create misunderstandings among the characters."
    },
    {
      id: 6,
      title: "Lahasil",
      author: "Umera Ahmed",
      price: "$18",
      image: "/urdu/u6.jpg",
      category: "urdu",
      categoryId: 4,
      description: "_Lahasil_ is a compelling story spanning two generations, centered around a woman from the streets of London. It explores the themes of human desires, lust, and greed, alongside love, contentment, and faith. The story follows Katherine, a call-girl in London, who crosses paths with Mazhar, a man from a respectable family who embodies strong Islamic values. Inspired by his character, Katherine converts to Islam, adopting the name Khadija Noor, and the two marry, eventually having a son named Zulayd. However, when Mazhar discovers Katherine’s past, he divorces her, taking their son with him. Both remarry — Mazhar in London, and Khadija, who moves to Pakistan, adopts a daughter, and rebuilds her life. Years later, their children, Mariam and Zulayd, meet and marry, but their journey is filled with unexpected twists and turns. _Lahasil_ is one of Umera Ahmed’s most brilliantly written novels, later adapted into a successful drama series that brought her widespread fame."
    },
    {
      id: 7,
      title: "Ishq-e-Atish",
      author: "Nimra Ahmed",
      price: "$14",
      image: "/urdu/u7.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Ishq-e-Atish** is a beautiful tale of love, struggle, and redemption. The story follows the journey of two people, Arham and Mehak, whose lives are intertwined by fate. Arham, a man with a tragic past, is determined to rebuild his life, while Mehak, a woman with her own set of challenges, finds herself in the midst of a deep emotional transformation. The narrative explores themes of trust, betrayal, and the power of love to heal. As Arham and Mehak come to terms with their own inner demons, they find solace in each other’s company, eventually learning that love is not just a feeling but a force that can change lives forever."
    },
    {
      id: 8,
      title: "Sulphite",
      author: "Umera Ahmed",
      price: "$15",
      image: "/urdu/u8.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Sulphite** is a gripping novel that delves deep into the complexities of human emotions, mental health, and relationships. The plot centers on a young woman, Meher, who struggles with her own identity and place in the world. After a tragic event that alters her life, she embarks on a journey of self-discovery, navigating a web of societal expectations, family pressure, and personal trauma. The novel explores themes of healing, personal growth, and the struggle to find meaning in a chaotic world. Through Meher's journey, readers are reminded of the importance of self-acceptance and the power of perseverance."
    },
    {
      id: 9,
      title: "Aks",
      author: "Umera Ahmed",
      price: "$13",
      image: "/urdu/u9.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Aks** is a compelling story about identity, self-reflection, and the complexities of the human soul. The novel follows the journey of a young woman named Sana, who struggles to find her true self amidst the expectations of society and her family. As Sana grapples with her inner demons, she begins to question the very nature of her existence. The story is a beautiful exploration of the inner world of its characters and their quest for peace, truth, and understanding. Through Sana's transformation, the novel highlights the importance of embracing one’s true self, no matter the consequences."
    },
    {
      id: 10,
      title: "Hasil",
      author: "Nimra Ahmed",
      price: "$17",
      image: "/urdu/u10.jpg",
      category: "urdu",
      categoryId: 4,
      description: "**Hasil** is a story of love, sacrifice, and the relentless pursuit of one's dreams. The novel revolves around the lives of two individuals, Hasil and Sara, whose worlds collide under tragic circumstances. As Hasil struggles with his personal demons and past mistakes, Sara is determined to build a life filled with meaning and love. The novel explores their journey together, as they both navigate the complexities of life, loss, and love. It is a story of redemption, where both characters learn that true happiness lies not in what they possess, but in what they are willing to give up for the sake of love and truth."
    }
  ];
  
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