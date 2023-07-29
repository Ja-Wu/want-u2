const contentContainer = document.getElementById("chapter-content");

function getQueryParameter(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}

function loadChapterContent() {
    const chapterFunction = getQueryParameter('chapter');

    if (chapterFunction == '0'){loadIntro();}
    else if (chapterFunction == '1'){loadChapter1();}
    else if (chapterFunction == '2'){loadChapter2();}
    else if (chapterFunction == '3'){loadChapter3();}
    else if (chapterFunction == '4'){loadChapter4();}
    else {loadConclusion();}
}

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

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // You can use "auto" or "smooth" for scrolling behavior
    });
}

function loadIntro() {
    goToTop();
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
            <button class="btn" onclick="loadChapter1()">Chapter 1 - Humanism</button>
        </div>
    `;

    contentContainer.innerHTML = chapter2Content;
}

function loadChapter1() {
    goToTop();
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
            <button class="btn" onclick="loadIntro()">Introduction</button>
            <button class="btn" onclick="loadChapter2()">Chapter 2 - Skepticism</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadChapter2() {
    goToTop();
    const chapter2Content = `
        <h2>Chapter 2: Embracing Skepticism: Unraveling Truth through Critical Inquiry</h2>
        <p>What is Skepticism?</p>
        <p>Skepticism is a philosophical approach that encourages a questioning and critical mindset towards claims, beliefs, and knowledge. Skeptics do not accept ideas at face value but rather subject them to rigorous examination, seeking evidence and rational justification before accepting them as true. The aim of skepticism is to foster a deeper understanding of reality by scrutinizing ideas, challenging assumptions, and distinguishing between valid information and unfounded claims. </p>
        <p>How Skepticism Works:</p>
        <ul>
            <li>Doubt and Inquiry: Skepticism begins with doubt as a driving force for exploration. Skeptics inquire into the evidence, sources, and reasoning behind various propositions, seeking to identify any inconsistencies or logical fallacies.</li>
            <li>Empirical Evidence: Skeptics prioritize empirical evidence—observations and data that can be objectively verified—over anecdotal accounts or baseless assertions. They seek well-founded evidence to support or refute a claim.</li>
            <li>Open-Mindedness: Skeptics maintain an open mind and are willing to adjust their beliefs based on new evidence. They understand that knowledge is provisional and subject to revision as new information emerges.</li>
            <li>Balancing Confidence: Skeptics refrain from absolute certainty, recognizing that some claims may remain inconclusive or uncertain. They strive to strike a balance between skepticism and reasonable confidence based on available evidence.</li>
        </ul>
        <p>The Goals of Skepticism:</p>
        <ul>
            <li>Pursuit of Truth: The primary goal of skepticism is the pursuit of truth and accurate understanding. By questioning and critically examining ideas, skeptics aim to separate reliable information from misinformation and pseudoscience.</li>
            <li>Protection Against Deception: Skepticism serves as a safeguard against deception, manipulation, and fraud. By applying critical thinking, individuals can avoid falling prey to scams, misleading advertisements, and unfounded claims.</li>
            <li>Fostering Scientific Inquiry: Skepticism supports scientific investigation and encourages reliance on evidence-based knowledge. It promotes scientific literacy and encourages public awareness of the scientific method.</li>
            <li>Intellectual Humility: Skeptics embrace intellectual humility, acknowledging the limitations of human knowledge and the potential for error. They approach complex topics with humility, recognizing that they might not have all the answers.</li>
        </ul>
        <p>Embracing Skepticism: An Example Situation</p>
        <p>Imagine you come across a sensational news article claiming that a new "miracle" weight-loss product can help people shed pounds effortlessly. As a skeptic, your initial response would be to approach this claim with skepticism rather than blind acceptance.</p>
        <p>You might first consider the credibility of the source, checking if it is a reputable and reliable news outlet. Next, you would investigate the evidence presented to support the product's effectiveness. Are there scientific studies backing up these claims, or is the information based solely on personal testimonials?</p>
        <p>A skeptic would also look for potential conflicts of interest. Are the promoters of the product financially benefiting from its sales? Are there any vested interests that might compromise the objectivity of the information?</p>
        <p>By engaging in this critical inquiry, a skeptic would likely discover red flags or insufficient evidence to support the extravagant claims. As a result, they would remain skeptical of the product's effectiveness until robust, independent evidence can substantiate the claims made.</p>
        <p>Skepticism and Humanism: Complementary Perspectives</p>
        <p>Humanism and skepticism are harmonious philosophical perspectives that can enrich one another. While humanism emphasizes empathy, compassion, and the importance of human values, skepticism acts as the methodological foundation for achieving truth and understanding.</p>
        <p>In their pursuit of truth, humanists can embrace skepticism to ensure their beliefs and ethical decisions are grounded in evidence and reason. This ensures that the principles they advocate for are well-founded, rather than being based on unfounded assumptions or dogma.</p>
        <p>Conversely, skeptics can draw inspiration from humanism's focus on human welfare and ethical considerations. When engaging in critical inquiry, skeptics can be mindful of the potential impact of their findings on human lives and well-being, using their insights to promote positive change and social justice.</p>
        <p>Together, humanism and skepticism form a powerful alliance, guiding individuals towards informed decision-making that prioritizes both the pursuit of truth and the betterment of humanity.</p>
        <p>In the subsequent chapter, we will explore the concept of agnosticism, delving into its significance in addressing questions about gods, spirituality, and the ultimate nature of reality. We will witness how agnosticism complements the humanistic and skeptical perspectives, offering a nuanced approach to life's existential mysteries.</p>
        <div>
            <button class="btn" onclick="loadChapter1()">Chapter 1 - Humanism</button>
            <button class="btn" onclick="loadChapter3()">Chapter 3 - Agnosticism</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadChapter3() {
    goToTop();
    const chapter2Content = `
        <h2>Chapter 3: Embracing Agnosticism: Navigating the Mysteries of Gods and Reality</h2>
        <p>What is Agnosticism?</p>
        <p>Agnosticism is a philosophical position that acknowledges the limits of human knowledge and understanding, particularly when it comes to questions about the existence of gods or the ultimate nature of reality. Agnostics recognize that some questions may lie beyond the scope of human comprehension, and as such, they adopt a humble and open-minded stance towards matters of spirituality and metaphysics.</p>
        <p>How Agnosticism Works:</p>
        <ul>
            <li>Recognition of Limits: Agnostics acknowledge that there are questions about the universe, gods, or ultimate reality that may transcend human ability to answer definitively. They resist making absolute claims or denying the possibility of the unknown.</li>
            <li>Suspended Judgment: Agnosticism involves suspending judgment on matters that lack sufficient evidence or are inherently unknowable. Agnostics refrain from asserting beliefs without reasonable justification.</li>
            <li>Humility in Uncertainty: Agnostics embrace uncertainty and recognize that some questions may remain unanswered indefinitely. They do not consider ignorance a weakness but rather an acknowledgment of the vastness of existence.</li>
            <li>Exploration and Inquiry: Agnostics remain curious and open to exploring various perspectives and ideas about spirituality and the nature of reality. They value intellectual inquiry while respecting the diversity of beliefs.</li>
        </ul>
        <p>The Goals of Agnosticism:</p>
        <ul>
            <li>Epistemic Humility: Agnosticism aims to cultivate intellectual humility by recognizing the limitations of human knowledge. This humility encourages individuals to be cautious about absolute claims and dogmatism.</li>
            <li>Bridge of Understanding: Agnostics strive to foster understanding and respect among individuals with differing beliefs. By acknowledging the vastness of human perspectives, they seek common ground and promote dialogue.</li>
        </ul>
        <p>
        Identifying as Agnostic: An Example Situation
        </p>
        <p>
        Imagine you encounter a heated debate between individuals with vastly different religious beliefs. As an agnostic, your approach to this situation would involve recognizing the diversity of perspectives while acknowledging the limits of your own knowledge.
        </p>
        <p>
        Rather than taking sides or asserting the superiority of any particular belief system, you would listen attentively to each person's viewpoint, seeking to understand the reasons behind their convictions. You might inquire about their personal experiences, cultural background, and the values that underpin their beliefs.
        </p>
        <p>
        While engaging in this discussion, you would remain open to the possibility that none of the participants may possess the absolute truth. Instead of attempting to impose your own beliefs or conclusions, you would promote a respectful exchange of ideas, emphasizing the value of coexistence and mutual understanding.
        </p>
        <p>
        Agnosticism and Its Unity with Skepticism and Humanism:
        </p>
        <p>
        Agnosticism finds common ground with both skepticism and humanism, creating a cohesive approach to life's profound questions.
        </p>
        <ol>
            <li>Agnosticism and Skepticism: Agnosticism recognizes that skepticism is an essential tool for exploring the unknown. It aligns with skepticism in its cautious approach to accepting beliefs without sufficient evidence. Together, they encourage a humble, evidence-based inquiry into the mysteries of existence.</li>
            <li>Agnosticism and Humanism: Agnostics, like humanists, value empathy, compassion, and social justice. They recognize the shared humanity among diverse individuals and advocate for understanding, even amidst differing beliefs. Agnosticism complements humanism by acknowledging that while we may not have absolute answers, our actions can still be guided by ethical considerations.</li>
        </ol>
        <p>
        By embracing agnosticism, individuals can transcend divisive debates and find common ground in the recognition of shared human experiences and the humility of the unknown. Agnosticism serves as a bridge between skepticism's critical inquiry and humanism's empathetic approach, fostering an open and compassionate perspective towards life's most profound mysteries.
        </p>
        <p>
        In the final chapter, we will explore anti-theism and its stance towards organized religion, highlighting how it can coexist with the virtues of humanism, skepticism, and agnosticism while promoting a vision of an inclusive and enlightened society.
        </p>
        <div>
            <button class="btn" onclick="loadChapter2()">Chapter 2 - Skepticism</button>
            <button class="btn" onclick="loadChapter4()">Chapter 4 - Anti-Theism</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadChapter4() {
    goToTop();
    const chapter2Content = `
        <h2>Chapter 4: Embracing Anti-Theism: Challenging Organized Religion for a More Enlightened World</h2>
        <p>What is Anti-Theism?</p>
        <p>Anti-Theism is a philosophical position that goes beyond atheism, as it not only lacks belief in gods but actively opposes the influence and practices of organized religion. Anti-theists critique religious institutions for their historical and contemporary roles in promoting dogma, intolerance, and societal division. While respecting individual beliefs and spirituality, anti-theism seeks to address the potential harm caused by the misuse of religious authority and advocate for a secular society that prioritizes reason and human well-being.</p>
        <p>How Anti-Theism Works:</p>
        <ul>
            <li>Critique of Dogma: Anti-theists scrutinize religious doctrines and dogma, challenging the claims made by organized religions that are not supported by empirical evidence.</li>
            <li>Separation of Church and State: Anti-theists advocate for the clear separation of religious institutions from the governing bodies of a secular state, to ensure equal treatment of all citizens regardless of their beliefs.</li>
            <li>Promotion of Secular Values: Anti-theism encourages the adoption of secular ethics and principles based on reason, empathy, and human welfare, rather than reliance on religious texts or authorities.</li>
            <li>Tolerance of Individual Spirituality: While opposing organized religion, anti-theists respect an individual's right to personal spirituality and beliefs, so long as those beliefs do not infringe upon the rights and well-being of others.</li>
        </ul>
        <p>The Goals of Anti-Theism:</p>
        <ul>
            <li>Promotion of Rational Inquiry: Anti-theists advocate for critical thinking and evidence-based decision-making, encouraging individuals to base their beliefs on reason and not dogma.</li>
            <li>Advocacy for Secularism: Anti-theists strive to promote a secular society where religious institutions do not hold undue influence over public policy and governance. They advocate for policies that uphold the rights and freedoms of all citizens, irrespective of their beliefs.</li>
            <li>Elevation of Human Flourishing: The primary goal of anti-theism is to prioritize human well-being and progress. By addressing the negative impacts of organized religion, anti-theists aim to create a more inclusive, compassionate, and enlightened world.</li>
        </ul>
        <p>Holding an Anti-Theistic Stance: An Example Situation</p>
        <p>Imagine a community faced with a divisive issue such as the implementation of comprehensive sex education in schools. Some religious leaders strongly oppose the inclusion of such education, citing religious doctrines as the basis for their objections.</p>

        <p>An anti-theist's approach to this situation would involve engaging in respectful dialogue with religious leaders and community members. While acknowledging their beliefs, the anti-theist would advocate for evidence-based sex education that has been shown to improve the health and well-being of young people. They would emphasize that comprehensive sex education does not seek to undermine religious beliefs but rather aims to provide essential knowledge to help students make informed and responsible decisions.</p>

        <p>An anti-theist would also advocate for the separation of religious beliefs from public policy decisions. They would remind the community that in a secular society, laws and policies should be based on reason, evidence, and the well-being of all citizens, rather than any particular religious doctrine.</p>

        <p>Complementing Concepts: Anti-Theism and the Other Philosophical Perspectives</p>

        <ol>
            <li>Anti-Theism and Skepticism: Anti-theism aligns with skepticism in its critical approach to religious claims. Skepticism encourages questioning and examining beliefs, and anti-theism applies this mindset to religious dogma and assertions.</li>
            <li>Anti-Theism and Humanism: Both anti-theism and humanism prioritize human welfare and well-being. Humanists strive to create a just and compassionate society, and anti-theists advocate for secular values that protect individual rights and promote inclusivity.</li>
            <li>Anti-Theism and Agnosticism: While agnosticism acknowledges the limits of human knowledge, anti-theism takes a stance against the influence of organized religion that may have caused harm throughout history. Agnostics may embrace anti-theism as a response to the negative impacts of certain religious practices.</li>
        </ol>

        <p>By embracing an anti-theistic perspective, individuals can contribute to building a more equitable and enlightened world that celebrates the best aspects of humanity while challenging harmful influences.</p>
        <div>
            <button class="btn" onclick="loadChapter3()">Chapter 3 - Agnosticism</button>
            <button class="btn" onclick="loadConclusion()">Conclusion</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

function loadConclusion() {
    goToTop();
    const chapter2Content = `
        <h2>Conclusion: A Framework for Human Flourishing: Embrace the Journey of Humanism, Skepticism, Agnosticism, and Anti-Theism</h2>
        <p>
        In this exploration of humanism, skepticism, agnosticism, and anti-theism, we have embarked on a profound journey of philosophical discovery—a journey that promises to transform not only our personal lives but also the very fabric of society. As we stand at the crossroads of reason and compassion, we invite you to embrace this compelling framework that calls for a harmonious coexistence of these perspectives for the greater good of humanity.
        </p>
        <p>
        Humanism, with its emphasis on empathy, reason, and the inherent value of every individual, lays the groundwork for an ethical approach that prioritizes the well-being of all. By adopting a humanistic perspective, you open the doors to a life guided by compassion and a genuine concern for the welfare of others, creating ripples of positive impact that extend far beyond the boundaries of your own existence.
        </p>
        <p>
        Skepticism, our steadfast companion in the pursuit of truth, equips us with the tools to distinguish fact from fiction, empowering us to navigate the turbulent seas of information with discernment. Embracing skepticism means standing as vigilant guardians against misinformation and deceit, fostering an informed and enlightened society that relies on evidence and reason as its guiding beacons.
        </p>
        <p>
        Agnosticism, the guardian of intellectual humility, invites us to embrace the beauty of uncertainty in a universe brimming with mysteries. By identifying as agnostic, we acknowledge the limitations of human knowledge while remaining open to the vast potential for understanding and growth. This stance enables us to transcend the divisive barriers of dogmatism, embracing diverse perspectives and nurturing dialogue that seeks common ground in our shared humanity.
        </p>
        <p>
        And lastly, anti-theism, with its passionate advocacy for secular values and the elevation of human flourishing, encourages us to challenge the status quo. By holding an anti-theistic stance towards organized religion, we affirm our commitment to a society that celebrates reason, compassion, and equality. This perspective compels us to envision a world free from the shackles of religious dogma, where the pursuit of truth and the well-being of individuals take precedence over blind adherence to outdated practices.
        </p>
        <p>
        As these four powerful concepts intertwine, they form an unyielding framework for human flourishing—a framework that transcends personal beliefs and illuminates a path towards a more compassionate, enlightened, and inclusive society. Together, they fortify us against the pitfalls of ignorance, intolerance, and prejudice, ushering us towards a future where intellectual integrity and empathetic understanding reign supreme.
        </p>
        <p>
        The choice to adopt a humanistic perspective, embrace skepticism, identify as agnostic, and hold an anti-theistic stance is a call to action—an invitation to be the architects of a world characterized by reason, empathy, and open-mindedness. As individuals, we possess the capacity to shape our own lives and influence the collective destiny of humanity. Let us unite under this banner of enlightenment, striving to leave a legacy of progress and unity for generations to come.
        </p>
        <p>
        In the symphony of life, let us be the voices that sing the praises of compassion and reason, the hands that craft a tapestry of knowledge and understanding, and the hearts that beat with empathy for all. Embrace the profound wisdom of humanism, the unwavering pursuit of truth through skepticism, the humility of agnosticism, and the call for an enlightened world through anti-theism. Together, we can build a future that transcends the boundaries of belief systems, harmonizing humanity towards a shared vision of flourishing and harmonious coexistence.
        </p>
        <div>
            <button class="btn" onclick="loadChapter4()">Chapter 4 - Anti-Theism</button>
            <button class="btn" onclick="loadIntro()">Introduction</button>
        </div>
    `;

    // Update the content container with the new content
    contentContainer.innerHTML = chapter2Content;
}

window.onload = loadChapterContent();