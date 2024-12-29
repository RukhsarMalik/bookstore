
import { NextResponse } from "next/server";

const books = [
    {
        id: 1,
        title: "Chasing the Heavy Air",
        author: "Quiche De Flurry",
        price: "$11",
        image: "/fiction/f1.jpg",
        category: "fiction",
        categoryId: 1,
        description: "**Winner of the 2024 High Plains Book Award.**\n\nGo as a River tells the heartbreaking story of Victoria Nash, a 17-year-old living on a peach farm in Colorado, whose life is changed by a chance encounter with a drifter, Wilson Moon. After a tragic event, Victoria flees into the wilderness, struggling to survive and rebuild her life. Inspired by real events, this novel explores themes of love, loss, resilience, and hope, set against Colorado's rugged beauty. It's a powerful tale of finding strength and home in the face of hardship."
  
      },
      {
          id: 2,
          title: "The Beach House",
          author: "Rachel Hanna",
          price: "$22",
          image: "/fiction/f2.jpg",
          category: "fiction",
          categoryId: 1,
          description: "Julie's world is turned upside down when her husband's double life ends their marriage, leaving her to rebuild at forty-three. Moving to a South Carolina island, she unexpectedly finds herself reconnecting with her estranged sister and meeting a charming stranger who helps her transform a fixer-upper into her dream home. Just as she starts to embrace her new independence, her ex-husband reappears, threatening to disrupt her fresh start. Filled with charm, wit, and a quirky cast of characters, **The Beach House** is a heartwarming journey of resilience, self-discovery, and second chances."
        },
      {
        id: 3,
        title: "Before We were Yours",
        author: "Lisa Wingate",
        price: "$20",
        image: "/fiction/f3.jpg",
        category: "fiction",
        categoryId: 1,
        description: "**A Heartbreaking Tale of Family, Secrets, and Redemption** \n\n Over two million copies sold! A New York Times and USA Today Bestseller. \n\nIn 1939 Memphis, twelve-year-old Rill Foss and her siblings are torn from their lives on a Mississippi River shantyboat when they are sent to an orphanage after their parents' sudden departure. As Rill fights to keep her family together, she discovers the dark truth behind their separation./n/nDecades later, Avery Stafford, a successful prosecutor, returns home to care for her father and uncovers unsettling secrets about her family's past. Her journey reveals the painful history of Georgia Tann's notorious adoption scandal, where children were kidnapped and sold to wealthy families.\n\n **Lisa Wingate's** powerful story, inspired by real events, explores themes of love, loss, and the enduring strength of family.",
      },
      {
        id: 4,
        title: "The Losy BookShop",
        author: "Evie Woods",
        price: "$10",
        image: "/fiction/f4.jpg",
        category: "fiction",
        categoryId: 1,
        description: "**The Story Collector by Evie Woods - A Magical Tale of Mystery and Wonder**\n\nEvie Woods' The Story Collector is a captivating novel that combines mystery, secrets, and the magic of books. When a hidden bookshop appears on a quiet Dublin street, three strangers—Opaline, Martha, and Henry—find their ordinary lives transformed. As they uncover the secrets of the mysterious shelves, they discover that their own stories are just as extraordinary as those in the books they cherish.\n\nThis enchanting novel, filled with charm and wonder, will transport you to a world where nothing is as it seems. The Echo of Old Books meets The Lost Apothecary in a journey of self-discovery and magical adventure.",
      },
      {
        id: 5,
        title: "Love of my Life",
        author: "Rosie Walsh",
        price: "$25",
        image: "/fiction/f5.jpg",
        category: "fiction",
        categoryId: 1,
        description: "**The Love of My Life by Rosie Walsh - A Gripping, Heartbreaking Mystery**\n\nThe Love of My Life is a heart-wrenching, page-turning mystery from New York Times bestselling author Rosie Walsh. Emma has a perfect life with her husband, Leo, and their daughter, Ruby—but almost everything she’s told them is a lie. When a serious illness leads Leo, a talented obituary writer, to research Emma’s life, he uncovers a dark secret: the woman he loves isn’t who she claims to be, not even her name. As Emma’s past unravels, she must prove to Leo that she is still the woman he once knew—and share the truth about the other love of her life. This is a story of love, secrets, and the power of truth.",
      },
      {
        id: 6,
        title: "All Good People Here",
        author: "Ashley Flowers",
        price: "$22",
        image: "/fiction/f6.jpg",
        category: "fiction",
        categoryId: 1,
        description: "**All Good People Here by Ashley Flowers - A Chilling Tale of Secrets and Justice**\n\nAll Good People Here by Ashley Flowers is a gripping, twisty mystery that explores the dark secrets hidden behind closed doors. Twenty years after January Jacobs' mysterious disappearance and murder in the small town of Wakarusa, Margot Davies, who was just a child at the time, returns home to care for her uncle. She’s haunted by the case, never having found closure. When another young girl, Natalie Clark, goes missing under eerily similar circumstances, Margot becomes determined to uncover the truth behind both cases. As she digs deeper, she finds herself up against townspeople who seem to be hiding something, and the chilling question remains: Is January’s killer still out there, and is it the same person who took Natalie? This intense thriller keeps you on the edge of your seat as it unravels a web of secrets, betrayal, and danger.",
      },
      {
        id: 7,
        title: "The Heaven & Earth Grocery Store",
        author: "James McBride",
        price: "$22",
        image: "/fiction/f7.jpg",
        category: "fiction",
        categoryId: 1,
        description:"**The Heaven & Earth Grocery Store by James McBride - A Heartfelt Tale of Secrets and Survival.**\n\nThe Heaven & Earth Grocery Store by James McBride is a powerful novel about small-town secrets, community, and survival. Set in 1972 in Pottstown, Pennsylvania, the discovery of a skeleton at the bottom of a well sparks a deep dive into the intertwined lives of the residents of Chicken Hill—a neighborhood where African Americans and Jewish immigrants lived side by side. The story focuses on Moshe and Chona Ludlow, who made a difference in their community by integrating a theater and running a grocery store. Alongside them is Nate Timblin, a Black janitor and community leader, who works with Chona to protect a deaf boy from institutionalization. As the truth of Chicken Hill’s past is uncovered, McBride reveals the resilience of the marginalized and the love that binds them together. With his signature blend of compassion and storytelling, McBride brings to life a novel that celebrates humanity even in the darkest times.",
      },
      {
          id: 8,
          title: "The Paper Palace",
          author: "James McBride",
          price: "$22",
          image: "/fiction/f8.jpg",
          category: "fiction",
          categoryId: 1,
          description:"**The Paper Palace by Miranda Cowley Heller - A Gripping Tale of Love, Secrets, and Life-Altering Choices**\n\nThe Paper Palace is an emotionally charged novel set on Cape Cod, where a woman is faced with a life-changing decision that has been brewing for decades. Elle, a fifty-year-old mother of three, wakes up at the family’s summer home, The Paper Palace, after an affair with her childhood friend Jonas, whom she shared a deep connection with. As she reflects on her life, Elle must choose between the love of her devoted husband, Peter, and the life she could have had with Jonas, had tragedy not altered their paths. Over the course of one fateful day, Elle confronts secrets, desires, and the complexities of her family’s history. The Paper Palace is a poignant exploration of love, loss, and the consequences of choices that echo through a lifetime.",
        },
        {
          id: 9,
          title: "Lessons in Chemistry",
          author: "Bonnie Garmus",
          price: "$15",
          image: "/fiction/f9.jpg",
          category: "fiction",
          categoryId: 1,
          description:"**Lessons in Chemistry by Bonnie Garmus - A Bold and Witty Story of an Unconventional Chemist**\n\nLessons in Chemistry is the story of Elizabeth Zott, a brilliant and self-assured chemist in 1960s California, whose life takes an unexpected turn when she becomes the star of a popular TV cooking show. Despite facing the challenges of being a woman in a male-dominated field, Elizabeth’s unconventional approach to cooking and science becomes revolutionary. As she teaches women more than just recipes, she challenges them to rethink their roles and change the status quo. With sharp wit and humor, Lessons in Chemistry is a laugh-out-loud, insightful tale about defying expectations and embracing individuality.",
        },
        {
          id: 10,
          title: "Every Summer After",
          author: "Carley Fortune",
          price: "$10",
          image: "/fiction/f10.jpg",
          category: "fiction",
          categoryId: 1,
          description:"**Every Summer After by Carley Fortune - A Heartfelt Story of Love and Regret**\n\nEvery Summer After follows Persephone Fraser, who returns to her childhood town after a decade of avoiding the man she once loved. For six summers, she and Sam Florek were inseparable, their bond growing into a love story until a painful fallout separated them. Now, after years of avoiding the past, Percy must face the mistakes she made and the love she left behind. Over the course of six summers and one pivotal weekend, Percy confronts her past and explores whether love can overcome the choices that have shaped her life. This nostalgic tale of love, loss, and self-discovery captures the complexities of relationships and the power of second chances.",
        },
    ];

export async function GET() {
  return NextResponse.json(books);  
}
