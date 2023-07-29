const contentContainer = document.getElementById("chapter-content");

document.addEventListener("DOMContentLoaded", function() {
    var fontSelect = document.getElementById("font-select");
    var fontSizeSelect = document.getElementById("font-size-select");
  
    fontSelect.addEventListener("change", updateFont);
    fontSizeSelect.addEventListener("change", updateFont);
  
    function updateFont() {
      var selectedFont = fontSelect.value;
      var selectedFontSize = fontSizeSelect.value;
      var body = document.body;
  
      if (selectedFont === "default") {
        body.style.fontFamily = "";
      } else {
        body.style.fontFamily = selectedFont;
      }
  
      if (selectedFontSize === "default") {
        body.style.fontSize = "";
      } else {
        body.style.fontSize = selectedFontSize;
      }
    }
  });
  
loadIntro();

function loadIntro() {
    const chapter2Content = `
        <h2>Introduction</h2>
        <p>
        In the vast tapestry of human thought and philosophical inquiry, four distinct standpoints emerge, each offering unique perspectives on existence, ethics, and our place in the universe. Humanism, skepticism, agnosticism, and anti-theism are philosophical frameworks that challenge us to reevaluate our beliefs, scrutinize the truth we hold dear, and explore the profound implications of our convictions. In this modern era of interconnectedness and information overload, understanding these concepts becomes more crucial than ever before.
        </p>
        <p>
        Imagine a world where compassion and empathy are the cornerstones of our interactions, where the pursuit of knowledge is driven by evidence and reason, and where individuals engage in meaningful introspection regarding their beliefs. Picture a society where individuals coexist peacefully, acknowledging the mystery of the cosmos while embracing the diversity of perspectives on spirituality and religion. Such a world may seem like an idealistic dream, but it is one that can be achieved through the application of these philosophical perspectives.
        </p>
        <p>
        But what do these concepts entail, and how can they find practical applications in our daily lives? Consider this: in our pursuit of truth, can skepticism act as a guiding light, illuminating our path through a sea of misinformation? Can agnosticism help us embrace uncertainty while fostering respect for the spiritual journeys of others, irrespective of their beliefs? How can an anti-theistic stance towards organized religion contribute to a more inclusive and tolerant society, where the common goal is human flourishing and mutual understanding?
        </p>
        <p>
        Join us on a journey through these enlightening philosophies, as we explore the positive impacts they can have on your life and the world around you. From personal decision-making to matters of public policy, the ramifications of adopting a humanistic perspective, coupled with skepticism, agnosticism, and anti-theism, are far-reaching and profound.
        </p>
        <p>
        Throughout this series of articles, we will delve into the essence of each philosophy, understanding their core tenets, and examining their applications in various aspects of human existence. From ethics and morality to science and spirituality, these frameworks offer us the tools to navigate the complexities of the world with intellectual integrity and emotional wisdom.
        </p>
        <p>
        So, are you ready to embark on this journey of self-discovery and open-minded exploration? Can you envision a future where compassion, reason, and mutual respect unite us as a species, transcending the boundaries of belief systems that have often divided us?
        </p>
        <p>
        It is time to cast aside preconceived notions, to challenge the status quo, and to embrace the beauty of uncertainty. The path ahead may be illuminated with questions, but it is a journey worth taking—a journey towards a more enlightened, compassionate, and harmonious world. Let us take the first step together into the realms of humanism, skepticism, agnosticism, and anti-theism, and discover the transformative power they hold for humanity's future.
        </p>
        <div>
            <button class="btn" onclick="loadChapter1()">Humanism</button>
        </div>
    `;

    contentContainer.innerHTML = chapter2Content;
}

function loadChapter1() {
    // Set the new content for Chapter 1
    const chapter2Content = `
        <h2>Chapter 1: Embracing Humanism: The Ethical Compass for a Flourishing World</h2>
        <p>
        What is Humanism?
        </p>
        <p>
        At its core, Humanism is a philosophical outlook that places human values, reason, and compassion at the forefront of ethical decision-making and understanding the world. Humanists emphasize the importance of empathy, critical thinking, and a commitment to improving the well-being of all individuals, valuing human dignity and potential as the foundation for a just and harmonious society.
        </p>
        <p>
        How Humanism Works:
        </p>
        <ul>
            <li>Focus on Humanity: Humanists recognize the inherent worth and significance of every individual, regardless of their background, culture, or beliefs. This focus on humanity forms the basis for equality, social justice, and the promotion of human rights.</li>
            <li>Rational Inquiry: Humanists rely on reason, evidence, and scientific methods to understand the world. They value knowledge and seek to continually expand our understanding of reality through intellectual inquiry.</li>
            <li>Ethical Framework: Humanists derive their ethical principles from human experience, empathy, and an understanding of the consequences of actions. They emphasize the importance of moral decision-making that considers the well-being of all affected parties.</li>
            <li>Tolerance and Pluralism: Humanists embrace diversity and advocate for tolerance and respect towards different beliefs and perspectives. They recognize that pluralism enriches society and fosters a spirit of cooperation.</li>
            <li>Secular Outlook: While humanists acknowledge the diversity of spiritual and religious beliefs, they advocate for a secular society where institutions of governance and public policy remain independent of any religious influence. They promote the separation of church and state to ensure fairness and protect individual freedoms.</li>
        </ul>
        <p>
        The Goals of Humanism:
        </p>
        <ul>
            <li>Moral Progress: Humanists seek to promote moral progress by encouraging empathy, compassion, and understanding among individuals and communities. They believe that ethical behavior should be rooted in human welfare and the desire to create a better world.</li>
            <li>Social Justice: Humanists work towards building a just society where all individuals have equal rights and opportunities, regardless of their background or identity. They advocate for policies that address systemic inequalities and empower marginalized groups.</li>
            <li>Intellectual Enlightenment: Humanists value education and critical thinking as essential tools for personal growth and societal advancement. They encourage lifelong learning and the pursuit of knowledge for the betterment of humanity.</li>
            <li>Environmental Responsibility: Humanists recognize the interconnectedness of humanity and nature, advocating for sustainable practices that protect the environment and ensure a viable future for generations to come.</li>
        </ul>
        <p>
        Adopting a Humanistic Perspective: An Example Situation
        </p>
        <p>
        Imagine you encounter a homeless person on a cold winter night. As a humanist, your ethical framework compels you to empathize with their plight and recognize their dignity as a fellow human being. Instead of ignoring their presence or dismissing them as a societal burden, a humanist would approach the situation with compassion and a desire to help.
        </p>
        <p>
        Taking a humanistic perspective, you might consider the immediate needs of the homeless individual, such as providing warm clothing, food, or shelter. However, a humanist would also strive to address the root causes of homelessness, advocating for systemic changes that address poverty, mental health, and social welfare.
        </p>
        <p>
        Furthermore, a humanist's response would extend beyond individual actions to community involvement. They might collaborate with local organizations to support programs that offer long-term solutions to homelessness, such as job training, affordable housing initiatives, and mental health resources.
        </p>
        <p>
        In this way, a humanist's approach is grounded in empathy, reason, and a commitment to social justice, seeking not only to alleviate immediate suffering but also to address the broader societal factors that contribute to such issues.
        </p>
        <p>
        By adopting a humanistic perspective, individuals can become active agents of positive change in their communities, working together to build a more compassionate and equitable world for everyone.
        </p>
        <p>
        In the next chapter, we will explore the principles of skepticism and how they complement the humanistic perspective in the pursuit of truth and understanding.
        </p>
        
        <div>
            <button class="btn" onclick="loadChapter2()">Skepticism</button>
        </div>
        <div>
            <button class="btn" onclick="loadIntro()">Introduction</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}


function loadChapter2() {
    // Set the new content for Chapter 2
    const chapter2Content = `
        <h2>Introduction</h2>
        <p>text for Introduction</p>
        <p>more text for Introduction</p>
        <p>even more text for Introduction</p>
        <div>
            <button class="btn" onclick="loadChapter3()">Humanism</button>
        </div>
        <div>
            <button class="btn" onclick="loadChapter1()">xxx</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadChapter3() {
    // Set the new content for Chapter 3
    const chapter2Content = `
        <h2>Humanism</h2>
        <p>text for Humanism</p>
        <p>more text for Humanism</p>
        <p>even more text for Humanism</p>
        <div>
            <button class="btn" onclick="loadChapter4()">Skepticism</button>
        </div>
        <div>
            <button class="btn" onclick="loadChapter2()">Introduction</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadChapter4() {
    // Set the new content for Chapter 4
    const chapter2Content = `
        <h2>Skepticism</h2>
        <p>text for Skepticism</p>
        <p>more text for Skepticism</p>
        <p>even more text for Skepticism</p>
        <div>
            <button class="btn" onclick="loadChapter3()">Chapter 3</button>
        </div>
        <div>
            <button class="btn" onclick="loadChapter5()">Chapter 5</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}