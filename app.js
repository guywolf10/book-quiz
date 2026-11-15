/**
 * BOOK QUIZ APP - Core Engine & Study Guide
 * Features:
 * - Comprehensive Chapter Summaries with counter-intuitive insights & exercises
 * - Deep, profound Active Recall Quiz questions
 * - Practice Mode (immediate feedback) & Exam Mode
 * - Multi-book support & JSON book importer
 * - 100% offline & local file:// compatibility
 */

// ============================================================================
// EMBEDDED DEFAULT DATA (Ensures zero-setup functionality offline & on file://)
// ============================================================================
const DEFAULT_SEVEN_PRINCIPLES_SUMMARIES = [
  {
    "id": "ch1",
    "chapterNumber": 1,
    "title": "Inside the Seattle Love Lab: The Truth About Happy Marriages",
    "bigIdea": "Marital success is not built on complex conflict resolution or avoiding disagreements; it is grounded in everyday friendship, emotional intelligence, and a high ratio of positive to negative interactions.",
    "counterIntuitiveInsights": [
      "Quid Pro Quo is toxic: Happy couples do NOT keep an informal ledger of favors ('I did this, so you owe me that'). An informal contract of reciprocity only emerges when trust has collapsed.",
      "Conflict avoidance is not fatal: Gottman identified three stable relationship styles (validating, volatile, and conflict-avoiding). Conflict avoiders can have lifelong happy marriages as long as they maintain a 5:1 positive-to-negative ratio during disagreements.",
      "Affairs are a symptom, not the root cause: Most divorces are not caused by extramarital affairs. Affairs usually happen after months or years of emotional detachment and loneliness.",
      "Personality problems don't doom relationships: Everyone has neuroses. Healthy couples accommodate and work around each other's quirks rather than pathologizing them.",
      "Active listening therapy fails for most: The traditional marital therapy advice to 'mirror and validate' during heated fights fails because almost no human can practice calm mirroring when physiologically flooded."
    ],
    "coreMechanics": [
      "The 91% Prediction Rate: By coding facial expressions (FACS), verbal dialogue, and autonomic physiology (heart rate, blood pressure, sweat), Gottman predicts divorce with 91% accuracy from a single 15-minute conversation.",
      "The 5:1 vs. 20:1 Ratio: Stable couples have at least 5 positive interactions for every 1 negative interaction during conflict, and a staggering 20:1 ratio during everyday casual life."
    ],
    "keyTakeaway": "Friendship fuels the fire of romance and acts as the ultimate shock absorber against conflict."
  },
  {
    "id": "ch2",
    "chapterNumber": 2,
    "title": "What Does Make Marriage Work?",
    "bigIdea": "A lasting marriage is structured like a 'Sound Relationship House' whose foundation is friendship, whose protective walls are Trust and Commitment, and whose climate is determined by Positive Sentiment Override.",
    "counterIntuitiveInsights": [
      "Negative Sentiment Override (The 'Roach Motel for Lovers'): When couples lose trust, they check into an absorbing state of negativity where they assume negative intent behind even neutral or positive gestures by their partner.",
      "Betrayal is rarely just sexual: Fundamental betrayal is any choice or habit where a partner does not prioritize the commitment ('putting the partner before all others')—such as emotional withdrawal, siding with a parent against a spouse, or chronic broken promises."
    ],
    "coreMechanics": [
      "Attunement: Emotional connection where partners are aware of, understand, and feel empathy for each other's emotional states.",
      "The Sound Relationship House Floors: 1) Build Love Maps, 2) Share Fondness & Admiration, 3) Turn Toward, 4) The Positive Perspective, 5) Manage Conflict, 6) Make Life Dreams Come True, 7) Create Shared Meaning. The two load-bearing walls are Trust and Commitment."
    ],
    "keyTakeaway": "When the foundation of friendship is solid, couples enjoy Positive Sentiment Override—giving each other the benefit of the doubt automatically."
  },
  {
    "id": "ch3",
    "chapterNumber": 3,
    "title": "How I Predict Divorce: The Six Warning Signs",
    "bigIdea": "Divorce can be reliably predicted by identifying six destructive interaction patterns, spearheaded by the Four Horsemen of the Apocalypse and physiological flooding.",
    "counterIntuitiveInsights": [
      "Start-up dictates the outcome: 96% of the time, the outcome of a 15-minute conflict can be predicted by the first 3 minutes alone. A harsh start-up almost guarantees a bad ending.",
      "Contempt is the single deadliest poison: Beyond predicting divorce, contempt is so psychologically corrosive that the spouse receiving it suffers higher rates of infectious illnesses (colds, flu) due to immune suppression.",
      "Men flood much more easily: 85% of stonewallers are men. Evolutionarily and biologically, men experience higher cardiovascular reactivity to stress, secrete more adrenaline, and take longer to return to baseline, causing them to withdraw to prevent physical overload."
    ],
    "coreMechanics": [
      "Complaint vs. Criticism: A complaint addresses a specific action ('You didn't take out the trash'); criticism attacks global character ('You are lazy and never care').",
      "The Four Horsemen & Their Antidotes: 1) Criticism → Gentle Start-up; 2) Contempt → Culture of Appreciation; 3) Defensiveness → Taking Responsibility (even 2%); 4) Stonewalling → Physiological Self-Soothing (break of at least 20 min).",
      "Flooding: Heart rate exceeding 100 bpm, triggering fight-or-flight, shutting down the prefrontal cortex, and rendering creative compromise biologically impossible.",
      "Failed Repairs: The difference between happy and unhappy couples isn't how eloquent their repairs are, but whether their emotional climate allows repairs to be accepted."
    ],
    "keyTakeaway": "Conflict escalation is a biological event. You cannot negotiate or resolve issues while either partner's heart rate is pounding in fight-or-flight."
  },
  {
    "id": "ch4",
    "chapterNumber": 4,
    "title": "Principle 1: Enhance Your Love Maps",
    "bigIdea": "Love Maps are the cognitive space in your brain where you store all relevant knowledge about your partner's inner world, daily life, history, worries, and hopes.",
    "counterIntuitiveInsights": [
      "High intelligence doesn't guarantee a love map: Case of Dr. Rory, a brilliant pediatrician who ran an ICU but didn't know his family dog's name or where the back door of his house was.",
      "Love Maps protect against the transition to parenthood: 67% of new parents experience a precipitous drop in marital satisfaction; the 33% who thrive are those who had detailed, updated love maps before the baby was born."
    ],
    "coreMechanics": [
      "Cognitive Room: Dedicating mental bandwidth to keeping track of your spouse's changing world.",
      "Dynamic Updating: People change. A love map is never complete; it must be continuously refreshed through open-ended curiosity."
    ],
    "keyExercises": [
      "The 20 Questions Game: Testing knowledge of favorite movies, current stresses, biggest hopes, and closest friends.",
      "The 'Who Am I?' Exploration: Exploring 5 profound domains: 1) My Triumphs and Strivings, 2) Injuries and Healing (childhood wounds, past betrayals), 3) My Emotional World (how feelings were expressed in family of origin), 4) My Mission and Legacy, 5) Who I Want to Become."
    ],
    "keyTakeaway": "You cannot truly love someone you do not deeply know. Knowledge is the foundation from which affection and empathy grow."
  },
  {
    "id": "ch5",
    "chapterNumber": 5,
    "title": "Principle 2: Nurture Your Fondness and Admiration",
    "bigIdea": "Fondness and admiration are the antidote to contempt. They involve cultivating a cognitive habit of mind that scans the partner for what to praise rather than scanning for mistakes to criticize.",
    "counterIntuitiveInsights": [
      "Cherishing vs. Negative Comparison: Gottman defines cherishing as constantly reminding yourself how lucky you are to have your partner, which inoculates you against the dangerous habit of comparing them negatively to real or imagined alternatives.",
      "Recalling courtship resets perception: Couples who can still recall their early dating history with fondness, humor, and pride have a 94% chance of staying together."
    ],
    "coreMechanics": [
      "The Mental Habit: Unhappy spouses scan the environment for partner flaws to catch them doing something wrong; happy spouses scan for things to appreciate to catch them doing something right."
    ],
    "keyExercises": [
      "The 'I Appreciate...' Checklist: Selecting positive adjectives from a list (e.g., loving, generous, playful, strong) and sharing concrete examples of when the spouse exhibited them.",
      "Seven-Week Course in Fondness and Admiration: Daily rituals of framing positive thoughts and speaking appreciation aloud."
    ],
    "keyTakeaway": "Reminding yourself of your spouse's positive qualities prevents contempt from ever taking root."
  },
  {
    "id": "ch6",
    "chapterNumber": 6,
    "title": "Principle 3: Turn Toward Each Other Instead of Away",
    "bigIdea": "Romance is kept alive not by grand tropical vacations, but in the micro-moments of everyday life: responding to your partner's small 'bids' for emotional connection.",
    "counterIntuitiveInsights": [
      "The Anatomy of Sadness: Sadness stems from feeling that you have LOST someone or something. When a partner is sad, ask 'What is missing?' or 'Do you feel like you lost something?'. Never try to cheer them up or minimize their sadness—act like a traveler in their landscape of grief with them as your guide.",
      "The Anatomy of Anger: Anger stems from feeling BLOCKED from reaching a goal or having a boundary crossed. Behind every anger is a thwarted ambition or unfulfilled expectation. Never tell an angry partner to 'calm down'; search out the blocked goal and the obstacle.",
      "The Anatomy of Fear: Fear stems from feeling that the world is unsafe. Never dismiss fear with 'Don't be silly'—validate gut instincts.",
      "Haim Ginott's Rule: 'Understanding must precede advice.' The #1 mistake spouses make during stress conversations is rushing into problem-solving and giving unsolicited advice."
    ],
    "coreMechanics": [
      "Bids for Connection: Subtle verbal or physical gestures seeking attention, laughter, affection, or reassurance.",
      "Three Responses: Turning toward (connecting), turning away (ignoring/missing), and turning against (hostility).",
      "The Emotional Bank Account: Daily micro-turns deposit emotional capital, creating a buffer that absorbs future irritations."
    ],
    "keyExercises": [
      "The Stress-Reducing Conversation: 20 minutes at the end of each workday. Rules: Take turns (15 min each), show genuine interest, NO unsolicited advice, communicate understanding ('That makes total sense'), and take your partner's side ('We against the world')."
    ],
    "keyTakeaway": "'Don't do something, just be there!' Connection is built through presence and emotional attunement, not instant solutions."
  },
  {
    "id": "ch7",
    "chapterNumber": 7,
    "title": "Principle 4: Let Your Partner Influence You",
    "bigIdea": "True partnership requires power-sharing. Marriages flourish when spouses—particularly husbands—learn to yield, accept influence, and negotiate decisions collaboratively.",
    "counterIntuitiveInsights": [
      "The Gender Asymmetry: Gottman's research revealed that the vast majority of women (even in unhappy marriages) already accept influence from their husbands. However, when a man learns to accept influence from his wife, the risk of divorce drops by 81%.",
      "Yielding to win: Accepting influence is not about being passive or henpecked; it is about treating your partner as a full colleague whose feelings and opinions matter as much as your own."
    ],
    "coreMechanics": [
      "Escalation of Negativity: When a wife voices a grievance, an emotionally unintelligent husband responds with defensiveness or counter-attacks to assert dominance. An emotionally intelligent husband validates the point and looks for common ground.",
      "Jeremy's Honda Coupe: Example of a husband who bought a sports car despite his wife's financial and safety worries, believing 'it's my money,' destroying trust."
    ],
    "keyTakeaway": "You cannot have an equal partnership if one person holds a unilateral veto or treats compromise as defeat."
  },
  {
    "id": "ch8",
    "chapterNumber": 8,
    "title": "The Two Kinds of Marital Conflict: Solvable vs. Perpetual",
    "bigIdea": "69% of all marital problems are perpetual and will NEVER be resolved. Healthy couples do not eliminate perpetual problems; they learn to dialogue about them with humor and affection rather than falling into gridlock.",
    "counterIntuitiveInsights": [
      "The 69% Discovery: Longitudinal studies proved that almost 7 out of 10 marital conflicts arise from fundamental differences in personality, temperament, lifestyle preferences, and core values.",
      "Perpetual problems are not failures: Having perpetual arguments about punctuality, neatness, or spending does not mean you chose the wrong partner. It means you chose a specific set of unresolvable differences."
    ],
    "coreMechanics": [
      "Solvable Problems (31%): Situational, specific, with no hidden existential meaning (e.g., who takes out the trash tonight).",
      "Perpetual Problems (69%): Grounded in core personality traits or deep existential needs. They require acceptance, humor, and ongoing dialogue.",
      "The Warning Signs of Gridlock: When perpetual problems become gridlocked, partners feel rejected, spin their wheels, become polarized and defensive, vilify the other, and lose all humor."
    ],
    "keyTakeaway": "The goal of marriage is not to agree on everything, but to establish a gentle dialogue around your unresolvable differences."
  },
  {
    "id": "ch9",
    "chapterNumber": 9,
    "title": "Principle 5: Solve Your Solvable Problems",
    "bigIdea": "Solvable problems can be resolved through a structured, 5-step model: soften your start-up, make and receive repairs, soothe yourself and each other, compromise via concentric circles, and process emotional injuries.",
    "counterIntuitiveInsights": [
      "The 20-minute Soothing Rule: When flooded, a break MUST last at least 20 minutes to metabolize cortisol and adrenaline. Crucially: you must NOT spend that break ruminating on angry arguments or rehearsing comebacks, or heart rate will stay elevated.",
      "Subjective Realities: When processing a regrettable fight, both partners must accept that there is NO single objective truth. Two conflicting subjective realities can both be 100% valid."
    ],
    "coreMechanics": [
      "Step 1: Soften Start-Up: Complain without blame, use 'I' statements, describe what is happening without evaluation, express positive needs, be appreciative.",
      "Step 2: Make & Receive Repair Attempts: Using concrete phrases from the repair checklist ('I feel scared', 'Please let me finish', 'I see your point').",
      "Step 3: Soothe: Deep diaphragmatic breathing, muscle relaxation, taking breaks.",
      "Step 4: The Two Concentric Circles: Inner circle = non-negotiable core needs; Outer circle = areas of flexibility.",
      "Step 5: Processing a Regrettable Incident (5 stages: Feelings, Realities, Triggers, Responsibility, Constructive Plans)."
    ],
    "keyTakeaway": "Compromise is impossible until both partners feel heard, validated, and physiologically calm."
  },
  {
    "id": "ch10",
    "chapterNumber": 10,
    "title": "Coping with Typical Solvable Problems",
    "bigIdea": "Six hot-button topics account for most solvable conflicts: work stress/digital distraction, in-laws, money, housework, new parenthood, and sexual intimacy.",
    "counterIntuitiveInsights": [
      "In-law loyalty: The spouse whose family is causing tension must side unequivocally with their partner against their parents. Marriage demands an uncompromising 'we against the world' alliance.",
      "Housework has emotional meaning: For women, a husband doing his fair share of housework is one of the most powerful aphrodisiacs and expressions of emotional respect.",
      "Refusing sex gently: The golden rule of saying 'no' to sex is to always pair the refusal with affectionate physical touch and a concrete plan for when you will connect."
    ],
    "coreMechanics": [
      "Unplugging: Creating sacred device-free rituals to prevent smartphone distraction from eroding intimacy.",
      "Sexual Love Maps: Talking about sexual preferences, sensations, timing, and vulnerabilities openly without defensiveness."
    ],
    "keyTakeaway": "Day-to-day solvable conflicts are practical opportunities to demonstrate loyalty, equity, and tenderness."
  },
  {
    "id": "ch11",
    "chapterNumber": 11,
    "title": "Principle 6: Overcome Gridlock",
    "bigIdea": "Behind every gridlocked, painful marital argument lies an unacknowledged, unrespected life dream. Overcoming gridlock requires uncovering the hidden dream and moving from deadlock to compassionate dialogue.",
    "counterIntuitiveInsights": [
      "It is never about the money/chores: An argument about an expensive horse (the Daphne case) or church attendance is actually about freedom, peace, childhood legacy, or competence.",
      "Dreams don't have to be fully granted: Partners don't need to completely give up their own lives to satisfy the other's dream; simply acknowledging, validating, and finding a small area to honor the dream dissolves the gridlock."
    ],
    "coreMechanics": [
      "The Dream Detective: Listening underneath the angry position to identify the core desire (e.g., wanting safety, independence, spiritual roots, or validation)."
    ],
    "keyExercises": [
      "The Dream Catcher's Magic Questions: 1) What do you believe about this issue? 2) What is the story behind this? 3) What does this symbolize for you? 4) What is your ideal dream here?",
      "The Two-Circle Compromise for Dreams: Separating the absolute core dream (inner circle) from negotiable logistical details (outer circle)."
    ],
    "keyTakeaway": "When you honor your partner's deepest life dreams, perpetual conflicts transform from toxic battles into shared meaning."
  },
  {
    "id": "ch12",
    "chapterNumber": 12,
    "title": "Principle 7: Create Shared Meaning",
    "bigIdea": "Marriage reaches its highest fulfillment when couples construct a shared internal culture—a private world of shared symbols, rituals of connection, roles, and life goals.",
    "counterIntuitiveInsights": [
      "Every family is a micro-culture: Just like nations, healthy couples create their own unique customs, inside jokes, holiday rituals, and sacred traditions.",
      "Roles provide psychological safety: Agreeing on what it means to be a 'husband,' 'wife,' 'father,' or 'protector' removes ambiguity and friction."
    ],
    "coreMechanics": [
      "The Four Pillars of Shared Meaning: 1) Rituals of Connection (morning coffee, Friday dinners, bedtime hugs); 2) Support for Each Other's Roles; 3) Shared Goals (charity, creative pursuits, community); 4) Shared Values and Symbols (family heirlooms, values, spiritual beliefs)."
    ],
    "keyTakeaway": "Creating shared meaning elevates marriage from mere cohabitation into a shared spiritual journey."
  },
  {
    "id": "afterword",
    "chapterNumber": 13,
    "title": "Afterword: The Magic Six Hours & Daily Habits",
    "bigIdea": "A lasting marriage does not require an overhaul of your life; dedicating just six extra hours a week to small, intentional daily habits produces monumental compounding returns.",
    "counterIntuitiveInsights": [
      "The Marital Poop Detector: Happy couples do NOT sweep minor irritations under the rug. They have low tolerance for negativity and speak up early with gentle start-up, nipping small gripes in the bud before they ferment into contempt.",
      "The Six-Second Kiss: A kiss that lasts at least six seconds triggers oxytocin and breaks the spell of workday stress, making home something worth looking forward to."
    ],
    "coreMechanics": [
      "The Magic Six Hours Breakdown: 1) Partings: 2 min/day × 5 days = 10 min; 2) Reunions: 20 min/day × 5 days (6-sec kiss + stress-reducing talk) = 1 hr 40 min; 3) Admiration & Appreciation: 5 min/day × 7 days = 35 min; 4) Affection: 5 min/day × 7 days = 35 min; 5) Weekly Date: 2 hours once a week; 6) State of the Union Meeting: 1 hour once a week.",
      "The State of the Union Blueprint: Start with what went right, share 5 specific appreciations, address any issues with gentle start-up and the two-circle method, process regrettable incidents, and conclude with: 'What can I do to make you feel loved this coming week?'"
    ],
    "keyTakeaway": "Small, consistent daily investments in your relationship do more for your health and longevity than working out at a gym."
  }
];

const DEFAULT_SEVEN_PRINCIPLES_QUESTIONS = [
  {
    "id": "dq1",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Gottman argue that practicing 'quid pro quo' (contractual reciprocity / tally-keeping) is actually a sign of marital pathology rather than emotional maturity?",
    "options": [
      "Because happy spouses give freely without tracking immediate reciprocity; a mental ledger of debts only appears when emotional safety and trust have collapsed.",
      "Because marriage contracts are legally non-binding in court.",
      "Because keeping score requires too much mathematical calculation.",
      "Because reciprocal trades only work for financial issues, not emotional ones."
    ],
    "correctAnswer": 0,
    "explanation": "In happy marriages, spouses give out of love, goodwill, and mutual fondness without expecting an immediate payback. Gottman's research revealed that keeping a running tally of favors ('I rubbed your back, so you owe me one') is a red flag indicating chronic distrust and emotional insolvency.",
    "citation": "Chapter 1: Exploding More Myths About Marriage"
  },
  {
    "id": "dq2",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why did classical marital therapy based on 'active listening and mirroring' (e.g., Carl Rogers, Haim Ginott) fail for the vast majority of real-world couples in Gottman's studies?",
    "options": [
      "Because active listening is too simple to solve complex neuroses.",
      "Because when spouses are emotionally flooded in fight-or-flight, the prefrontal cortex shuts down, making calm, empathetic mirroring biologically almost impossible.",
      "Because active listening requires an advanced degree in psychology to master.",
      "Because active listening makes spouses become overly dependent on each other."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman found that even among couples who stayed happily married for decades, barely anyone used textbook active listening during fights. When heart rates surge past 100 bpm, expecting a furious spouse to calmly say 'What I hear you saying is...' is asking for emotional Olympic gymnastics that human physiology simply does not support.",
    "citation": "Chapter 1: Why Most Marriage Therapy Fails"
  },
  {
    "id": "dq3",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the critical 'magic ratio' of positive to negative interactions that distinguishes stable couples from couples headed for divorce during conflict?",
    "options": [
      "1:1 (equal positive and negative balance)",
      "Exactly 10:1 during all interactions",
      "At least 5:1 during conflict discussions (and 20:1 during everyday life)",
      "Negative interactions must be 0:1 (completely eliminated)"
    ],
    "correctAnswer": 2,
    "explanation": "Gottman discovered that in stable, happy marriages, there are at least 5 positive interactions (a smile, nod, touch, joke, or validation) for every 1 negative interaction during conflict. Outside of conflict, in casual day-to-day life, the ratio jumps to an astonishing 20 to 1.",
    "citation": "Chapter 1: Innovative Research, Revolutionary Findings"
  },
  {
    "id": "dq4",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "hard",
    "type": "concept",
    "question": "Gottman identified three distinct, equally stable styles of healthy conflict in long-lasting marriages: Conflict Avoiders, Volatile couples, and Validating couples. What is the fundamental finding regarding these three disparate styles?",
    "options": [
      "Validating is the only psychologically mature style; avoiders and volatile couples inevitably develop clinical neuroses over time.",
      "Conflict avoiders are secretly emotionally repressed and always end up divorcing after their children leave home.",
      "Volatile couples must undergo behavioral modification to tone down their passionate confrontations before they cause heart disease.",
      "All three styles are equally capable of sustaining a long, happy marriage, provided that the positive-to-negative interaction ratio remains at least 5 to 1."
    ],
    "correctAnswer": 3,
    "explanation": "Gottman exploded the myth that there is only one 'correct' way to handle conflict. Passionately loud volatile couples, calm validating couples, and conflict-avoiding couples who choose to agree to disagree can all thrive for decades, provided they maintain at least 5 positive interactions for every 1 negative interaction during conflict.",
    "citation": "Chapter 1: Exploding More Myths About Marriage"
  },
  {
    "id": "dq5",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Gottman reject the common cultural belief that extramarital affairs are the primary root cause of divorce?",
    "options": [
      "Because in over 80% of cases, marital friendship, emotional closeness, and feeling valued had already eroded years earlier; the affair was a downstream symptom of this profound emotional drift rather than its origin.",
      "Because research shows that affairs actually strengthen marriages by highlighting existing weaknesses.",
      "Because physical intimacy outside marriage is legally irrelevant in modern no-fault divorce proceedings.",
      "Because men and women have completely different evolutionary drives that make affairs inevitable regardless of marital health."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman cites Lynn Gigy and Joan Kelly’s research showing that in only 20–27% of divorces was an affair cited as even partly to blame. Instead, more than 80% of divorced spouses cited gradually growing apart, losing closeness, and not feeling loved or appreciated. The friendship dissolved first; the affair was a downstream symptom of emotional vacancy.",
    "citation": "Chapter 1: Exploding More Myths About Marriage"
  },
  {
    "id": "dq6",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "medium",
    "type": "concept",
    "question": "What did Gottman’s research discover about the relationship between personality differences, individual neuroses, and marital failure?",
    "options": [
      "Spouses must have complementary personality types (e.g., introvert with extrovert) to balance each other out; mismatched temperaments predict divorce.",
      "There is only the weakest statistical correlation between run-of-the-mill neuroses/personality quirks and marital failure; happy couples have just as many eccentricities and personality differences as unhappy couples.",
      "Severe neuroticism in either partner guarantees divorce within the first seven years of marriage.",
      "Couples who share identical Myers-Briggs personality profiles have an 85% lower divorce rate."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman found that we all have emotional baggage and neurotic quirks. The difference between couples who stay happily married and those who divorce is not whether they have personality differences or neuroses, but whether they manage them with mutual respect, humor, and emotional attunement rather than contempt and hostility.",
    "citation": "Chapter 1: Exploding More Myths About Marriage"
  },
  {
    "id": "dq7",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "hard",
    "type": "concept",
    "question": "What occurs when a couple enters 'Negative Sentiment Override' (NSO) and checks into the 'Roach Motel for Lovers'?",
    "options": [
      "They stop speaking for at least thirty days.",
      "They begin booking separate vacations without consulting each other.",
      "An absorbing filter of distrust distorts perception so that even neutral or positive gestures by the spouse are interpreted as hostile, selfish, or manipulative.",
      "They actively hire private investigators to monitor each other."
    ],
    "correctAnswer": 2,
    "explanation": "In Negative Sentiment Override, the emotional filter is set to suspicion. If a spouse in NSO says 'I cooked dinner tonight,' the partner doesn't hear a loving gesture; they think 'What are you trying to guilt-trip me into doing?' It is an absorbing state that traps couples in a zero-sum war of attrition.",
    "citation": "Chapter 2: Building Your Sound Relationship House"
  },
  {
    "id": "dq8",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "medium",
    "type": "concept",
    "question": "According to Gottman’s research on trust, how does he define 'betrayal' in its broadest and most destructive sense?",
    "options": [
      "Strictly as a physical sexual affair with another person.",
      "Disclosing marital arguments to close friends.",
      "Opening an individual savings account without informing the other.",
      "Any ongoing choice, habit, or life decision that fails to prioritize the partnership and put the spouse 'before all others' (e.g., emotional withdrawal, siding with a parent, chronic broken promises)."
    ],
    "correctAnswer": 3,
    "explanation": "While physical infidelity is devastating, Gottman points out that nonsexual betrayals (emotional coldness, chronic absenteeism, siding with parents against a spouse, breaking promises) destroy trust just as completely. Betrayal lies at the core of all failed relationships.",
    "citation": "Chapter 2: Building Your Sound Relationship House"
  },
  {
    "id": "dq9",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Gottman’s architectural model of the 'Sound Relationship House', why are Trust and Commitment depicted as the two outer weight-bearing walls rather than interior floors?",
    "options": [
      "Because without the foundational conviction that your partner acts in your best interest (Trust) and that this is a lifelong journey with no exit doors (Commitment), the interior floors will collapse under the weight of inevitable conflict.",
      "Because trust and commitment can only be constructed after all seven principles (the interior floors) have been fully perfected.",
      "Because trust and commitment represent financial assets, while the interior floors represent domestic chores.",
      "Because the structural walls are built by society, whereas the interior floors are built by the couple."
    ],
    "correctAnswer": 0,
    "explanation": "Trust (knowing your partner acts to maximize your well-being, not just their own) and Commitment (believing this journey is lifelong, with no exit doors, cherishing what you have) form the protective, weight-bearing walls of the Sound Relationship House. Without these twin pillars, attempts to solve problems or create shared meaning collapse under the stress of distrust and insecurity.",
    "citation": "Chapter 2: Building Your Sound Relationship House"
  },
  {
    "id": "dq10",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "hard",
    "type": "concept",
    "question": "How does the cognitive habit of 'Cherishing' serve as the ultimate defense against marital betrayal and infidelity (building on Caryl Rusbult and Shirley Glass)?",
    "options": [
      "By constantly buying expensive gifts and romantic vacations to keep excitement artificially elevated.",
      "By actively focusing on and maximizing your partner's positive traits during daily separations, fostering gratitude rather than making unfavorable comparisons to real or imagined alternatives.",
      "By pretending that your partner has zero flaws and refusing to acknowledge any disagreements.",
      "By monitoring your partner's location and social media to prevent outside temptation."
    ],
    "correctAnswer": 1,
    "explanation": "In Gottman’s research (building on Caryl Rusbult and Shirley Glass), betrayal begins long before an affair occurs—it starts when a partner begins making negative comparisons ('I could find someone who listens better than my spouse'). Cherishing is the opposite habit: actively dwelling on your partner’s positive qualities when apart and feeling lucky to have them.",
    "citation": "Chapter 2 & 5: Learning to Cherish Your Partner"
  },
  {
    "id": "dq11",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "medium",
    "type": "concept",
    "question": "According to Gottman, what is the core characteristic of an 'Emotionally Intelligent Marriage'?",
    "options": [
      "Both partners possess high IQ scores and advanced communication degrees.",
      "Spouses never raise their voices, experience anger, or engage in heated arguments.",
      "The couple maintains an emotional climate where negative thoughts and feelings do not overwhelm positive ones, and where emotional attunement keeps their underlying friendship intact.",
      "Both partners agree to undergo individual psychoanalysis prior to getting married."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman defines emotional intelligence in marriage as the ability to keep negative emotions from overwhelming the relationship's fundamental friendship. Emotionally intelligent couples do not avoid conflict or suppress anger; instead, they remain attuned, honor bids for connection, and prevent toxic negativity from eroding mutual respect.",
    "citation": "Chapter 1 & 2: Emotionally Intelligent Marriages"
  },
  {
    "id": "dq12",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "easy",
    "type": "concept",
    "question": "What is the crucial psychological distinction between a 'Complaint' and a 'Criticism'?",
    "options": [
      "A complaint is spoken softly, whereas a criticism is shouted loudly.",
      "A complaint is written in a letter, while a criticism is spoken face-to-face.",
      "There is no difference; Gottman uses them interchangeably.",
      "A complaint focuses on a specific action, event, or behavior, whereas a criticism attacks the partner’s global personality, character, or motives."
    ],
    "correctAnswer": 3,
    "explanation": "A complaint addresses a specific failure ('I was scared when you didn't call to tell me you were running late'). A criticism generalizes the incident into an indictment of the person’s character ('You forgot to call because you are completely selfish and never care about anyone but yourself').",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq13",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why is Contempt the deadliest of the Four Horsemen, and what shocking physical health consequence was discovered in partners who receive it?",
    "options": [
      "It conveys moral superiority and disgust, and its psychological toxicity actually suppresses the immune system of the receiving spouse, leading to more infectious illnesses (colds, flu).",
      "It causes immediate vocal cord damage in the speaker.",
      "It increases the likelihood of car accidents during evening commutes.",
      "It causes chronic insomnia strictly in the person delivering the insults."
    ],
    "correctAnswer": 0,
    "explanation": "Contempt is fueled by long-simmering negative thoughts and conveys unadulterated disgust and superiority ('You're an idiot'). Gottman’s team discovered that the amount of contempt a husband expressed toward his wife directly predicted how many infectious illnesses (colds, flu) she would suffer years later, because chronic psychological toxicity weakens immune functioning.",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq14",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the true antidote to Defensiveness, and why is it so psychologically disarming in an argument?",
    "options": [
      "Immediately countersuing with a larger grievance to force a draw.",
      "Taking responsibility for at least a small part of the problem (even 1-2%), which validates the partner's grievance and halts the escalation.",
      "Remaining completely silent until the partner finishes shouting.",
      "Explaining why your behavior was logically justified given the stressful circumstances."
    ],
    "correctAnswer": 1,
    "explanation": "Defensiveness is really a way of blaming your partner ('The problem isn't me, it's you!'). It only escalates the battle. The true antidote is accepting responsibility for any valid part of the complaint ('You're right, I should have called to let you know I was delayed, I'm sorry'). Even a tiny admission defuses tension instantly.",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq15",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why are 85% of stonewallers in heterosexual relationships men, and what biological imperative drives this behavior?",
    "options": [
      "Men are naturally less interested in verbal communication than women.",
      "Men are taught by society to be emotionless robots.",
      "Male cardiovascular systems react more intensely to stress (faster heart rate spike, more adrenaline) and recover much slower than women's; men stonewall as a biological defense against physical flooding.",
      "Men experience hearing degradation faster than women as they age."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman’s physiological data showed that men become flooded far more quickly than women during emotional conflict, their heart rates surge higher, and their bodies stay in fight-or-flight much longer. Stonewalling (tuning out, looking away, freezing) is not an act of smug defiance; it is a desperate biological survival strategy to avoid a heart attack of emotional overwhelm.",
    "citation": "Chapter 3: Men and Women Really Are Different"
  },
  {
    "id": "dq16",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "What physiological threshold defines 'Flooding', and what happens to the human brain once this state is entered?",
    "options": [
      "Body temperature drops below 95°F, causing emotional detachment.",
      "Breathing slows down to less than 4 breaths per minute, inducing fainting.",
      "Pupils dilate completely, making it impossible to see facial expressions.",
      "Heart rate accelerates past roughly 100 bpm, fight-or-flight hormones flood the bloodstream, and higher-order cortical processing shuts down, making creative compromise impossible."
    ],
    "correctAnswer": 3,
    "explanation": "Flooding occurs when a spouse feels overwhelmed by their partner's negativity. When the heart rate crosses ~100 bpm (or ~80-85 bpm for athletes), adrenaline surges, peripheral vision narrows, and the prefrontal cortex goes offline. In this biological state, constructive listening, empathy, and creative problem-solving are neurologically unreachable.",
    "citation": "Chapter 3: The Third Sign: Flooding"
  },
  {
    "id": "dq17",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "What did Gottman discover about 'Harsh Start-Up' when analyzing hundreds of 15-minute conflict discussions in the Love Lab?",
    "options": [
      "In 96% of cases, the outcome of the entire 15-minute conversation can be predicted by the first three minutes alone.",
      "Conversations that start harshly can usually be saved if a spouse introduces humor in the 12th minute.",
      "Harsh start-up only harms the marriage if accompanied by physical door-slamming.",
      "Men are three times more likely than women to initiate a harsh start-up during conflict discussions."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman's research revealed that in 96% of cases, the trajectory and emotional resolution of a 15-minute conflict conversation can be accurately predicted within the first three minutes. If the discussion begins with accusation, sarcasm, or harsh criticism, it is virtually guaranteed to end in hostility and failure.",
    "citation": "Chapter 3: The First Sign: Harsh Start-Up"
  },
  {
    "id": "dq18",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why do repair attempts (e.g., making a joke, apologizing, saying 'I need to calm down') succeed in some marriages while completely failing in others?",
    "options": [
      "Success depends primarily on whether the speaker uses precise, eloquent psychiatric terminology.",
      "Success has very little to do with the eloquence of the repair itself; it depends almost entirely on the state of the marriage and whether the underlying friendship is in Positive Sentiment Override.",
      "Success depends on whether the repair attempt is accompanied by a written contract.",
      "Repair attempts only work if delivered by the husband, because wives are naturally resistant to apologies."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman discovered that in happy marriages, even clumsy, awkward, or mumbled repair attempts ('Hey, stop yelling at me, okay?') are accepted and de-escalate tension. In unhappy marriages trapped in Negative Sentiment Override, even the most eloquent, textbook-perfect apologies are either rejected or attacked as manipulative.",
    "citation": "Chapter 3: The Fifth Sign: Failed Repair Attempts"
  },
  {
    "id": "dq19",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the final stage before marital dissolution (Sign 6: Bad Memories), how do distressed couples perceive the early history of their courtship and marriage?",
    "options": [
      "They vividly remember their early romantic passion and feel intensely nostalgic about it.",
      "They remember factual timelines with photographic precision while forgetting names of wedding guests.",
      "They literally rewrite their shared history, recasting early events in a cynical or negative light, or claiming they never truly loved each other.",
      "They invent fictional lovers to explain why the relationship initially began."
    ],
    "correctAnswer": 2,
    "explanation": "When chronic negativity completely consumes a relationship, spouses rewrite their mental history. They forget the excitement, joy, and tenderness of their courtship, remembering only frustration, disappointment, or indifference. Once a couple can no longer recall their past with warmth or humor, the marriage is in the terminal phase.",
    "citation": "Chapter 3: The Sixth Sign: Bad Memories"
  },
  {
    "id": "dq20",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In the opening of Chapter 4, Dr. Rory is an intellectually brilliant pediatrician running an intensive care unit for babies, yet his wife Lisa feels deeply unloved. What was Rory's shocking blind spot?",
    "options": [
      "He forgot his wife's birthday for ten years in a row.",
      "He secretly owned a sports car that he kept at the hospital.",
      "He refused to allow Lisa to have any credit cards.",
      "He didn't know the name of the family dog, didn't know the names of his children's friends, and had to ask his wife which door led to the backyard."
    ],
    "correctAnswer": 3,
    "explanation": "Rory was a brilliant doctor whose cognitive space was entirely consumed by his medical work. He had zero 'cognitive room' left for his family. He literally didn't know the name of the dog they had owned for years or how to get to the backyard. His Love Map of his family was completely blank.",
    "citation": "Chapter 4: Principle 1: Enhance Your Love Maps"
  },
  {
    "id": "dq21",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Alyson Shapiro’s study on first-time parents, what was the defining differentiator between the 67% of couples whose marital satisfaction plummeted and the 33% who remained happy or improved?",
    "options": [
      "The happy couples had detailed, deeply established Love Maps before the baby arrived, which acted as a shock absorber during the upheaval.",
      "The happy couples had significantly higher household incomes to hire night nannies.",
      "The happy couples had infants who slept through the night immediately.",
      "The happy couples sent their babies to daycare within the first month."
    ],
    "correctAnswer": 0,
    "explanation": "Having a baby causes a seismic shift in daily life. For 67% of couples, marital happiness crashes. Shapiro and Gottman found that the 33% of couples who weathered the storm without losing satisfaction had established rich, detailed Love Maps prior to the birth. They already understood each other's inner worlds, which protected their friendship.",
    "citation": "Chapter 4: In Knowledge There Is Strength"
  },
  {
    "id": "dq22",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Exercise 3 ('Who Am I?'), Gottman moves beyond favorite foods and friends into deep psychological mapping. Which of the following is one of the profound sections in this exercise?",
    "options": [
      "Credit Score History and Past Bankruptcies.",
      "Injuries and Healing (past psychological wounds, traumas, disappointments, and how they shape adult vulnerabilities).",
      "List of Ex-Partners and Romantic Comparisons.",
      "Dietary Allergies and Caloric Restrictions."
    ],
    "correctAnswer": 1,
    "explanation": "Exercise 3 covers five deep realms: My Triumphs and Strivings, My Injuries and Healing, My Emotional World, My Mission and Legacy, and Who I Want to Become. 'Injuries and Healing' explores the deep psychological scars, betrayals, and childhood wounds that dictate where a partner is emotionally sensitive today.",
    "citation": "Chapter 4: Exercise 3: Who Am I?"
  },
  {
    "id": "dq23",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Principle 1, what does Gottman mean by maintaining 'Cognitive Room' for your partner in your daily mental life?",
    "options": [
      "Keeping an accurate mental record of all household chores and financial expenditures.",
      "Spending at least two hours every morning meditating in complete silence before speaking to your partner.",
      "Reserving dedicated mental bandwidth to remember the evolving facts, feelings, stresses, and personal world of your spouse as they grow and change over time.",
      "Memorizing your partner's ancestral pedigree and astrological birth chart."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman explains that emotionally intelligent couples make plenty of 'cognitive room' for their marriage. People are not static; their fears, friendships, ambitions, and stresses evolve. Keeping an updated Love Map means continuously refreshing your mental portrait of your partner rather than assuming you already know everything about them.",
    "citation": "Chapter 4: Principle 1: Enhance Your Love Maps"
  },
  {
    "id": "dq24",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Exercise 3 ('Who Am I?'), why does Gottman have partners explore each other's 'Triumphs and Strivings' (proudest accomplishments, overcome hardships, and parental pride)?",
    "options": [
      "To determine which partner has achieved higher socioeconomic status.",
      "To establish an objective resume of qualifications for managing family investments.",
      "To prove that childhood achievements are irrelevant to adult romantic partnership.",
      "To uncover the spouse's core criteria for self-worth, pride, and emotional validation, allowing the partner to support what truly makes them feel competent and valued."
    ],
    "correctAnswer": 3,
    "explanation": "Exploring 'My Triumphs and Strivings' illuminates how a partner defines success and pride, what hurdles they had to overcome, and whether their family of origin celebrated or ignored their achievements. This knowledge provides deep insight into what validates their identity and self-worth.",
    "citation": "Chapter 4: Exercise 3: Who Am I?"
  },
  {
    "id": "dq25",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Exercise 2 ('Asking Open-Ended Questions'), why does Gottman prioritize open-ended inquiries (e.g., 'How would you like your life to look three years from now?') over closed questions?",
    "options": [
      "Because closed questions can be answered with a blunt 'yes' or 'no', feeling like an interrogation, whereas open-ended questions invite exploration, vulnerability, and genuine emotional connection.",
      "Because open-ended questions take longer to answer, filling awkward silences during dinner.",
      "Because open-ended questions prevent the listener from having to respond.",
      "Because closed questions are statistically correlated with physiological flooding."
    ],
    "correctAnswer": 0,
    "explanation": "Closed questions ('Did you finish the report?') function as administrative cross-examinations. In contrast, open-ended questions ('What are your biggest worries about your work lately?', 'What does home mean to you?') invite your partner to share their subjective inner world, deepening emotional attunement.",
    "citation": "Chapter 4: Exercise 2: Asking Open-Ended Questions"
  },
  {
    "id": "dq26",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the fundamental difference in the daily 'cognitive scanning habit' between partners in happy marriages versus partners in distressed marriages?",
    "options": [
      "Happy partners scan the stock market, distressed partners scan real estate.",
      "Distressed partners scan their spouse for mistakes to catch them doing something wrong; happy partners scan the environment for things to appreciate to catch their spouse doing something right.",
      "Happy partners ignore their spouse completely, distressed partners monitor them 24/7.",
      "Distressed partners scan for physical attraction, happy partners scan for financial security."
    ],
    "correctAnswer": 1,
    "explanation": "Distressed couples operate on a deficit model: they hyper-focus on their spouse's flaws, omissions, and lapses, waiting to catch them slipping up. Happy couples cultivate a positive perceptual habit: they scan the daily landscape for things they can genuinely praise and appreciate, catching their partner doing things right.",
    "citation": "Chapter 5: Principle 2: Nurture Your Fondness and Admiration"
  },
  {
    "id": "dq27",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Gottman’s Oral History Interview, with what statistical accuracy could he predict marital stability based solely on HOW couples recalled the early history of their courtship and marriage?",
    "options": [
      "50% (no better than a coin toss)",
      "72% accuracy",
      "94% accuracy—couples who recall their early days with warmth, humor, and pride almost always stay together, while those who recall the past with bitterness or blankness usually divorce.",
      "99.9% accuracy based solely on the date of their wedding."
    ],
    "correctAnswer": 2,
    "explanation": "By asking couples to tell the story of how they met, their first impressions, and their early struggles, Gottman predicted with 94% accuracy who would stay married. Couples with strong fondness and admiration glorified the struggle, laughed about early awkwardness, and spoke of each other with pride.",
    "citation": "Chapter 5: Learning from History"
  },
  {
    "id": "dq28",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Gottman identify Fondness and Admiration as the specific psychological antidote to Contempt?",
    "options": [
      "Because fondness and admiration release adrenaline, which physically combats stress hormones.",
      "Because admiring a partner forces them to change their undesirable habits through positive reinforcement.",
      "Because fondness and admiration eliminate all anger and irritation from everyday life.",
      "Because contempt requires feeling morally or intellectually superior; maintaining active respect, fondness, and appreciation directly neutralizes the superior stance that feeds contempt."
    ],
    "correctAnswer": 3,
    "explanation": "Contempt is the most corrosive horseman because it conveys disgust, sarcasm, and a stance of moral superiority ('I am better than you, and you are defective'). Fondness and admiration maintain the fundamental belief that your partner is worthy of honor and respect, making contempt psychologically impossible to sustain in that space.",
    "citation": "Chapter 5: Principle 2: Nurture Your Fondness and Admiration"
  },
  {
    "id": "dq29",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the core psychological mechanism of the 'Seven-Week Course in Fondness and Admiration' outlined in Chapter 5?",
    "options": [
      "It assigns a daily positive thought and a corresponding concrete behavior, retraining the brain to scan for praiseworthy qualities rather than default to distress-maintaining thoughts.",
      "It forces spouses to memorize a script of romantic poetry to recite each evening.",
      "It requires couples to separate for seven weeks to determine if they miss each other.",
      "It instructs partners to ignore all marital problems until seven weeks have elapsed."
    ],
    "correctAnswer": 0,
    "explanation": "The Seven-Week Course provides a structured daily regimen (a specific affirmative statement and a simple actionable behavior for every day of the week). Repeating this practice reconditions the mind away from negative rumination and trains it to consciously notice and celebrate the spouse's virtues.",
    "citation": "Chapter 5: Exercise 2: Seven-Week Course in Fondness and Admiration"
  },
  {
    "id": "dq30",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Exercise 1 ('I Appreciate'), why does Gottman mandate that when you praise your spouse for a character trait (e.g., 'You are thoughtful' or 'You are brave'), you MUST cite a specific, recent incident?",
    "options": [
      "Because legal guidelines for couples therapy require documented evidence of compliments.",
      "Because vague, abstract adjectives carry little emotional weight and easily sound like empty flattery; concrete behavioral memories provide tangible proof that resonates deeply.",
      "Because partners have poor memories and need historical reminders to understand English adjectives.",
      "Because listing specific incidents proves that the partner only behaves well under certain conditions."
    ],
    "correctAnswer": 1,
    "explanation": "Generalized compliments ('You're nice', 'You're great') bounce off spouses without creating emotional resonance. Pairing a cherished trait with a specific, recent memory ('I appreciated your thoughtfulness on Tuesday when you packed me an umbrella because of the storm') provides undeniable evidence of genuine attunement.",
    "citation": "Chapter 5: Exercise 1: I Appreciate"
  },
  {
    "id": "dq31",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 6, what profound psychological insight does Gottman reveal about the true root of SADNESS?",
    "options": [
      "Sadness is simply chemical fatigue that requires more caffeine.",
      "Sadness is a manipulative tactic used to gain power in domestic decisions.",
      "Sadness stems from feeling that you have LOST someone or something; when your partner is sad, you should ask 'What is missing?' rather than trying to cheer them up.",
      "Sadness only occurs when goals are blocked by an external enemy."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman explains that at the core of sadness is the feeling of LOSS—loss of a person, a dream, a hope, or an expectation. Trying to cheer a sad person up or saying 'Look on the bright side' invalidates them. The attunement key is acknowledging the loss and gently asking: 'What feels lost? What is missing?'",
    "citation": "Chapter 6: Coping with Your Partner’s Sadness, Fear, and Anger"
  },
  {
    "id": "dq32",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What metaphor does Gottman use to describe how you should listen when your partner is experiencing deep sadness or crying?",
    "options": [
      "Be like a trial lawyer interrogating a witness.",
      "Be like an enthusiastic cheerleader trying to rally a losing football team.",
      "Be like an emergency room physician performing triage to stop the crying immediately.",
      "Be like a traveler visiting the foreign landscape of sadness, with your partner serving as the tour guide."
    ],
    "correctAnswer": 3,
    "explanation": "Gottman advises: 'Think of yourself as a traveler visiting the foreign landscape of sadness. Your partner is the tour guide. Let your partner show you around the landscape.' Don't judge the scenery, don't try to pave it over with cheerfulness; simply let them show you what their sadness feels like.",
    "citation": "Chapter 6: Coping with Your Partner’s Sadness, Fear, and Anger"
  },
  {
    "id": "dq33",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the psychological origin of ANGER according to Gottman, and what should you search for when your partner is furious?",
    "options": [
      "Behind most anger is the feeling of being BLOCKED from reaching a goal or having a boundary violated; your job is to search out the blocked goal and the obstacle without telling them to 'calm down.'",
      "Anger is a genetic malfunction that should be sedated.",
      "Anger is caused by lack of physical exercise.",
      "Anger is always an irrational overreaction that must be ignored until it burns out."
    ],
    "correctAnswer": 0,
    "explanation": "Anger arises when a person feels an obstacle is blocking them from reaching an important goal or when a critical boundary has been crossed. Saying 'Calm down!' is pouring gasoline on a fire. The attuned partner searches out: 'What is the goal that's blocked? What is the obstacle in your way?'",
    "citation": "Chapter 6: Coping with Your Partner’s Sadness, Fear, and Anger"
  },
  {
    "id": "dq34",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What does FEAR or anxiety signify according to Gottman, and why is saying 'Don't be silly, there's nothing to be afraid of' so destructive?",
    "options": [
      "Fear signifies that the person has low intelligence.",
      "Fear signifies that the person feels their everyday world is not safe; dismissing it with 'there's nothing to fear' feels like ridicule and severs emotional safety.",
      "Fear is an indicator that the partner should immediately see a neurologist.",
      "Fear only happens when someone is hiding an illicit secret."
    ],
    "correctAnswer": 1,
    "explanation": "Fear and anxiety mean that the person does not feel safe in their environment. Security expert Gavin de Becker (*The Gift of Fear*) showed that fear is an essential survival warning. Dismissing a spouse's fear as irrational sends the message that their intuition is broken and their feelings are ridiculous, destroying safety.",
    "citation": "Chapter 6: Coping with Your Partner’s Sadness, Fear, and Anger"
  },
  {
    "id": "dq35",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the daily 'Stress-Reducing Conversation', what is Haim Ginott's golden rule that Gottman emphasizes above all else?",
    "options": [
      "'Always split the talking time exactly fifty-fifty down to the second.'",
      "'Never discuss anything that happened at work after 6:00 PM.'",
      "'Understanding must precede advice.'",
      "'The listener must take detailed written notes during the conversation.'"
    ],
    "correctAnswer": 2,
    "explanation": "The number one mistake spouses make during stress-reducing conversations is offering immediate advice and problem-solving solutions ('Why don't you just tell your boss...'). Ginott's rule is absolute: before you can even think about offering advice, the partner must feel 100% understood, validated, and heard. Most of the time, advice isn't even wanted.",
    "citation": "Chapter 6: Exercise 3: The Stress-Reducing Conversation"
  },
  {
    "id": "dq36",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Gottman’s longitudinal Love Lab study of newlyweds, what was the staggering difference in how couples responded to 'bids for connection' between those who stayed married and those who divorced six years later?",
    "options": [
      "Couples who stayed married had zero conflict discussions, while divorced couples argued daily.",
      "Couples who divorced actually made more bids for connection, but their bids were too aggressive.",
      "There was no difference in turning toward bids; divorce was predicted solely by how much money each partner earned.",
      "Couples who stayed married turned toward bids 86% of the time, while couples who eventually divorced turned toward bids only 33% of the time."
    ],
    "correctAnswer": 3,
    "explanation": "In the Love Lab apartment, newlyweds were observed making small, everyday bids for connection ('Look at that nice boat out the window!'). Spouses who were still happily married six years later had turned toward their partner's bids 86% of the time, whereas those who divorced had averaged only 33%. Small moments define marital destiny.",
    "citation": "Chapter 6: Principle 3: Turn Toward Each Other Instead of Away"
  },
  {
    "id": "dq37",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the primary function of the 'Emotional Bank Account' accumulated through everyday micro-connections, according to Gottman?",
    "options": [
      "It acts as an emotional safety cushion that absorbs shocks during stressful life transitions and prevents minor conflicts from escalating into toxic distrust.",
      "It serves as a financial ledger for dividing assets in case of separation.",
      "It allows one partner to demand favors without reciprocation for up to six months.",
      "It eliminates the need for having difficult conversations about money or sex."
    ],
    "correctAnswer": 0,
    "explanation": "Every time a partner turns toward a bid (listening, smiling, fetching water, acknowledging an observation), they deposit emotional capital into the bank account. When a crisis, stressor, or argument occurs, couples with high balances draw on this reservoir of goodwill and give each other the benefit of the doubt.",
    "citation": "Chapter 6: Exercise 1: The Emotional Bank Account"
  },
  {
    "id": "dq38",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "concept",
    "question": "During the end-of-day 'Stress-Reducing Conversation', what is the fatal mistake spouses often make when listening to their partner vent about work or external frustrations?",
    "options": [
      "Nodding and agreeing that the external enemy was unfair.",
      "Rushing to offer logical solutions, playing devil's advocate, or defending the boss/colleague who upset their partner.",
      "Validating their partner's emotional outrage before discussing dinner plans.",
      "Pouring a glass of water and sitting beside their partner in silence."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman emphasizes the cardinal rule: 'Don't do something, just be there!' When a partner vents about external stressors, they need emotional alliance and empathy, not problem-solving. Playing devil's advocate or defending the outside world makes your partner feel doubly attacked and abandoned by their closest ally.",
    "citation": "Chapter 6: Exercise 3: The Stress-Reducing Conversation"
  },
  {
    "id": "dq39",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "concept",
    "question": "What critical statistic did Gottman discover regarding husbands who learn to share power and accept influence from their wives?",
    "options": [
      "Their risk of suffering a heart attack increases by 40%.",
      "They become 50% less productive in their professional careers.",
      "The likelihood that their marriage will end in divorce drops by 81%.",
      "Their wives stop bringing up conflict altogether."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman found a profound gender asymmetry: the vast majority of women (even in unstable marriages) already accept influence from their husbands. But when a husband is unwilling to share power and rejects his wife's influence, there is an 81% chance that the marriage will self-destruct.",
    "citation": "Chapter 7: Principle 4: Let Your Partner Influence You"
  },
  {
    "id": "dq40",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In Chapter 7, how does an 'emotionally intelligent husband' respond when his wife says: 'Do you have to work this Saturday? We promised my brother we’d visit'?",
    "options": [
      "He stonewalls and pretends he didn't hear her.",
      "He snaps back: 'I pay the bills around here, so my job comes first!'",
      "He immediately quits his job to prove his devotion to her family.",
      "He says: 'I know we promised him, and I really want to go, but this client deadline is brutal. Can we look at our schedules and see if we can go Sunday instead?'"
    ],
    "correctAnswer": 3,
    "explanation": "An emotionally intelligent husband accepts influence. He doesn't dismiss her concern with anger, contempt, or defensiveness. He validates her point ('I know we promised him'), explains his reality without blame, and collaborates on a compromise that respects both needs.",
    "citation": "Chapter 7: Emotionally Intelligent Husbands"
  },
  {
    "id": "dq41",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to Gottman’s observations, how does a husband who refuses to accept influence typically escalate conflict when his wife brings up an issue?",
    "options": [
      "By deploying one of the Four Horsemen (such as defensiveness, stonewalling, or contempt) to overpower her, drown out her complaint, and obliterate her point of view.",
      "By immediately filing for legal mediation.",
      "By writing a long, overly apologetic email to her family.",
      "By agreeing to all her demands immediately without intending to follow through."
    ],
    "correctAnswer": 0,
    "explanation": "When a wife brings up a straightforward complaint, an influence-resisting husband responds by escalating the negativity. He counters her complaint with defensiveness ('Yes I did!'), contempt ('Don't tell me what to do!'), or stonewalling, using toxic hostility as a weapon to shut down her concerns and maintain unilateral control.",
    "citation": "Chapter 7: Signs of Resistance"
  },
  {
    "id": "dq42",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the core psychological principle behind Gottman's concept of 'Yielding to Win'?",
    "options": [
      "Pretending to agree with everything your spouse says in public while doing whatever you want in private.",
      "In order to have genuine influence over your partner, you must be open and willing to be influenced by them; yielding ground builds mutual goodwill and makes your partner receptive to your desires.",
      "Total emotional capitulation where one partner surrenders all decision-making authority to avoid conflict.",
      "Winning every argument by citing empirical research studies until your spouse gives up."
    ],
    "correctAnswer": 1,
    "explanation": "Drawing an analogy to martial arts (such as aikido), Gottman shows that true influence in marriage is circular. If you dig in your heels and refuse to give an inch, your partner will match your rigidity. By voluntarily yielding and validating your partner's viewpoint, you disarm defensiveness and earn the right to influence them in return.",
    "citation": "Chapter 7: Learning to Yield & Exercise 1: Yield to Win"
  },
  {
    "id": "dq43",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In the opening story of Chapter 7, Jeremy wants to buy a discounted used Honda coupe from Phil. When Phil mocks him for insisting on getting the car inspected because he promised his wife, how does Jeremy's response embody emotional intelligence?",
    "options": [
      "Jeremy punches Phil for insulting his marriage.",
      "Jeremy cancels the inspection behind his wife's back to prove his masculinity to Phil.",
      "Jeremy unabashedly replies, 'Sure, I let my wife tell me what to do about cars. Don't you?'—unashamed of sharing power, while Phil admits he is divorced.",
      "Jeremy demands that his wife come down to the lot and negotiate directly with Phil."
    ],
    "correctAnswer": 2,
    "explanation": "Jeremy proudly accepted his wife's influence and honored his agreement with her without feeling emasculated or defensive. When Phil sneered, 'You let your wife tell you what to do about cars?', Jeremy casually answered, 'Sure. Don't you?'—to which Phil revealed he didn't, and that he was now divorced.",
    "citation": "Chapter 7: Principle 4: Let Your Partner Influence You"
  },
  {
    "id": "dq44",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "hard",
    "type": "concept",
    "question": "Gottman’s research made the astonishing discovery that 69% of all marital conflicts are 'perpetual.' What is the profound philosophical implication of this finding?",
    "options": [
      "69% of married couples are deeply mismatched and should consider divorce.",
      "Marital therapy is a waste of time because nothing ever changes.",
      "Couples should stop talking about sensitive topics altogether to avoid wasting energy.",
      "That you never marry a person without also marrying a specific, enduring set of unresolvable differences; the goal is not to eliminate them, but to live with them in gentle dialogue and humor."
    ],
    "correctAnswer": 3,
    "explanation": "Almost 70% of marital arguments are rooted in fundamental personality differences, lifestyle habits, and core emotional values. They cannot be 'solved' any more than you can change a person's DNA. Happy couples accept this truth, treat these enduring differences with affection and humor, and prevent them from becoming gridlocked.",
    "citation": "Chapter 8: Perpetual Problems"
  },
  {
    "id": "dq45",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the key differentiator that separates a healthy dialogue about a perpetual problem from a 'gridlocked' conflict?",
    "options": [
      "In healthy dialogue, humor, affection, and mutual acceptance are present; in gridlock, partners feel rejected, villainize each other, become entrenched, and strip all warmth from the issue.",
      "In healthy dialogue, one partner completely gives in to the other's wishes.",
      "In healthy dialogue, arguments never last longer than ninety seconds.",
      "In healthy dialogue, couples hire a professional arbitrator to make the decision."
    ],
    "correctAnswer": 0,
    "explanation": "The hallmark of gridlock is not the disagreement itself, but the toxic emotional climate surrounding it. In gridlock, there is zero humor, no affection, entrenched positions, and mutual vilification. In healthy dialogue, spouses can debate their perpetual quirks with laughter, teasing, and deep fond acceptance.",
    "citation": "Chapter 8: The Signs of Gridlock"
  },
  {
    "id": "dq46",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Which of the following is an unmistakable diagnostic sign that a perpetual problem has collapsed into 'Gridlock'?",
    "options": [
      "Discussions about the problem are animated, loud, and full of teasing and affectionate humor.",
      "The conflict leaves partners feeling rejected, discussions make zero headway, positions become entrenched and unbudgeable, and conversations are completely devoid of humor, affection, or amusement.",
      "The couple discusses the issue briefly once a year during tax season.",
      "Both spouses agree to hire a third-party contractor to resolve the physical dispute."
    ],
    "correctAnswer": 1,
    "explanation": "In Chapter 8, Gottman lists the hallmark signs of gridlock: feeling rejected by your partner, spinning your wheels without movement, entrenchment, increasing hurt/frustration, mutual vilification, and conversations stripped of all warmth, humor, and goodwill.",
    "citation": "Chapter 8: The Signs of Gridlock"
  },
  {
    "id": "dq47",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does applying traditional problem-solving techniques to a 'perpetual problem' almost always backfire and intensify marital distress?",
    "options": [
      "Because perpetual problems involve illegal activities that therapists cannot touch.",
      "Because perpetual problems can only be resolved through hypnotherapy.",
      "Because perpetual problems stem from deep-seated differences in personality, core temperament, lifestyle preferences, and existential values; demanding a 'solution' effectively demands that one spouse undergo a radical personality overhaul.",
      "Because problem-solving techniques only work for couples who have been married for more than twenty-five years."
    ],
    "correctAnswer": 2,
    "explanation": "Solvable problems are situational (e.g., who takes out the trash). Perpetual problems are existential and rooted in core temperament (e.g., neat vs. messy, spender vs. saver, social butterfly vs. homebody). Trying to 'solve' a perpetual problem treats a partner's fundamental personality as a defect that needs fixing, triggering resentment and entrenchment.",
    "citation": "Chapter 8: Perpetual Problems"
  },
  {
    "id": "dq48",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did Love Lab monitors reveal about the physiological state of happy couples who were passionately debating their perpetual, unresolvable differences?",
    "options": [
      "Their heart rates surged to 140 bpm, showing that healthy love requires intense physical arousal during arguments.",
      "They exhibited complete neurological paralysis and numbness.",
      "They experienced severe galvanic skin conductivity spikes indicating chronic fight-or-flight panic.",
      "Their heart rates remained calm (well below 100 bpm), their blood pressure stayed steady, and their body language expressed relaxed engagement and affectionate amusement."
    ],
    "correctAnswer": 3,
    "explanation": "Masters of marriage do not get flooded when discussing their perpetual issues. Because they have made peace with their differences, accept each other's quirks, and sprinkle their discussions with humor and validation, their physiology remains relaxed and their heart rates stay well below the 100 bpm flooding threshold.",
    "citation": "Chapter 8: The Keys to Managing Conflict"
  },
  {
    "id": "dq49",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "During Step 3 of problem solving ('Soothe Yourself and Each Other'), Gottman mandates a break of at least 20 minutes when flooded. What is the STRICT condition that must be maintained during these 20 minutes?",
    "options": [
      "You must NOT spend the time ruminating on self-righteous indignation or rehearsing angry comebacks; you must actively distract yourself (read, walk, breathe) so your heart rate can drop.",
      "You must immediately text your spouse a written defense of your position.",
      "You must do high-intensity cardiovascular exercise to burn off excess cortisol.",
      "You must call a close friend or family member to explain why you were right."
    ],
    "correctAnswer": 0,
    "explanation": "If you take a 20-minute time-out but spend the entire time fuming ('How dare she say that to me! Just wait until I tell her...'), your physiological arousal will climb even higher. The 20-minute break only works if you mentally disengage, practice deep diaphragmatic breathing, and engage in relaxing activities that allow your autonomic nervous system to reset.",
    "citation": "Chapter 9: Step 3: Soothe Yourself and Each Other"
  },
  {
    "id": "dq50",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Step 4 ('Compromise'), how does Gottman’s 'Two Concentric Circles' exercise structure negotiation?",
    "options": [
      "The inner circle represents financial issues, and the outer circle represents emotional issues.",
      "Each spouse draws a small inner circle for their non-negotiable core needs / values, and a large outer ring for areas where they have flexibility and room to give.",
      "The inner circle represents tasks for the husband, and the outer circle represents tasks for the wife.",
      "Each spouse draws their immediate family in the center and in-laws in the outer circle."
    ],
    "correctAnswer": 1,
    "explanation": "In the Two Concentric Circles compromise model, each partner draws a small inner circle containing their non-negotiables (core values, bottom lines without which they cannot live). In the larger outer circle, they write down every aspect of the issue where they are willing to be flexible. Successful compromise occurs by honoring both inner circles and negotiating within the outer circles.",
    "citation": "Chapter 9: Step 4: Compromise"
  },
  {
    "id": "dq51",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Step 5 ('Processing a Regrettable Incident or Past Bad Fight'), what is the foundational ground rule regarding 'Realities'?",
    "options": [
      "The spouse who remembers the exact chronological timeline is deemed objectively correct.",
      "The couple must review text messages and call logs to determine who started the fight.",
      "Both partners must accept that there is NO single objective truth; two conflicting subjective perceptions can both be 100% valid.",
      "The partner who cried during the fight gets to dictate the objective narrative."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman stresses that there is no 'God-camera' that captured the absolute objective reality of a fight. Memory and emotional perception are inherently subjective. Trying to prove whose memory is 'the real truth' only reignites the battle. Healing requires accepting that two conflicting subjective experiences can both be legitimate.",
    "citation": "Chapter 9: Step 5: Dealing with Emotional Injuries"
  },
  {
    "id": "dq52",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are Gottman's four fundamental components for executing a successful 'Softened Start-Up' in Step 1 of problem solving?",
    "options": [
      "(1) Speak in a high pitch, (2) write down the grievance on parchment, (3) wait until bedtime, (4) bring a mediator.",
      "(1) Point out all past instances of the bad behavior, (2) explain why the behavior is neurotic, (3) give an ultimatum, (4) walk away.",
      "(1) Sarcasm to break the ice, (2) comparing the spouse to their parent, (3) demanding an immediate apology, (4) withholding affection.",
      "(1) Complain without blaming, (2) make statements that start with 'I' instead of 'You', (3) describe what is happening without judging, and (4) state clearly and politely what you need in positive terms."
    ],
    "correctAnswer": 3,
    "explanation": "Softened start-up requires taking responsibility, focusing on your own feelings rather than attacking ('I feel overwhelmed by the dishes' vs 'You never clean'), describing the factual situation neutrally, and clearly expressing a positive need ('I need some help clearing the sink tonight, please').",
    "citation": "Chapter 9: Step 1: Soften Your Start-Up"
  },
  {
    "id": "dq53",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "When using the 'Repair Attempt Checklist' in Step 2 of problem solving, why does Gottman place equal or greater emphasis on the partner's *reception* of the repair rather than its initiation?",
    "options": [
      "Because if an awkward or clumsy repair attempt is rejected, ignored, or treated as an admission of guilt, the conflict inevitably spirals into dangerous flooding and entrenchment.",
      "Because initiating repairs is legally required, but receiving them is voluntary.",
      "Because the listener is required by Gottman to grade the speaker's grammar and sincerity.",
      "Because receiving repairs requires taking medication to calm the cardiovascular system."
    ],
    "correctAnswer": 0,
    "explanation": "Making a repair takes courage and vulnerability. If a partner attempts to brake ('I know I'm getting defensive, sorry' or 'Can we pause for a second?') and the other partner stomps on the gas ('You're just trying to avoid the topic!'), the repair crashes. Successful conflict resolution requires both partners to be attuned to accepting the brakes.",
    "citation": "Chapter 9: Step 2: Learn to Make and Receive Repair Attempts"
  },
  {
    "id": "dq54",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Exercise 5 ('Processing a Previous Emotional Injury or Past Bad Fight'), what is the crucial transition that occurs between exploring 'Triggers' (Step 5) and 'Taking Responsibility' (Step 6)?",
    "options": [
      "Partners determine which person's childhood trauma was more severe.",
      "Spouses recognize that their intense emotional reactions often stem from old historical sensitivities ('enduring vulnerabilities'), allowing them to own their contribution and apologize rather than blaming the partner for causing their pain.",
      "The couple hires an attorney to draft a non-disclosure agreement.",
      "Both partners agree never to bring up their childhood memories again."
    ],
    "correctAnswer": 1,
    "explanation": "Exploring triggers helps partners realize that their extreme reaction wasn't solely about the current argument, but touched an 'enduring vulnerability' from childhood or past relationships. This insight allows both partners to step out of defensiveness, acknowledge their role ('I was already exhausted and snapped'), and offer a sincere apology.",
    "citation": "Chapter 9: Step 5: Dealing with Emotional Injuries"
  },
  {
    "id": "dq55",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "When in-laws criticize a spouse or cause tension in the marriage, what is Gottman’s uncompromising decree regarding marital allegiance?",
    "options": [
      "The couple should alternate holidays between families to keep everyone equally happy.",
      "The criticized spouse should write an apology letter to the in-laws to smooth things over.",
      "The spouse whose family is causing friction must side unequivocally with their partner against their own parents—marital solidarity ('we against the world') overrides family of origin.",
      "The spouses should let their mothers-in-law manage household decisions."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman is unequivocal: the marriage must take absolute precedence over the family of origin. When in-laws attack, criticize, or disrespect a spouse, the partner whose biological parents are doing the attacking MUST stand up and establish firm boundaries in defense of their mate. Siding with parents against your spouse is a foundational betrayal.",
    "citation": "Chapter 10: Relations with In-Laws"
  },
  {
    "id": "dq56",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the psychological golden rule when refusing sex gently in a marriage according to Gottman?",
    "options": [
      "Pretend you have a severe migraine so your partner doesn't take it personally.",
      "Explain in detail why your partner's initiation technique was unromantic.",
      "Ignore the request and go to sleep immediately.",
      "Never say no without simultaneously showing physical affection (a kiss, embrace) and offering a concrete commitment for when you will reconnect."
    ],
    "correctAnswer": 3,
    "explanation": "Sex is uniquely vulnerable. A blunt or cold 'No, I'm too tired' feels like personal rejection and disgust. Gottman’s blueprint for refusing sex gently is: envelop the refusal in warmth and physical affection (a loving embrace or tender kiss) and immediately reschedule ('I'm exhausted tonight, but let's take a bath together tomorrow evening').",
    "citation": "Chapter 10: Refusing Sex Gently"
  },
  {
    "id": "dq57",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the 2015 edition of Chapter 10, what startling reality did Gottman highlight regarding the impact of smartphones, tablets, and screen time on contemporary marriages?",
    "options": [
      "In a study of young professional couples, actual conversation time averaged just thirty-five minutes a week—mostly logistical errands—with screens acting as constant digital barriers that rob couples of eye contact and micro-moments of connection.",
      "Couples who text each other throughout the day have zero marital conflicts.",
      "Electronic devices improve marriages by eliminating the need for face-to-face discussions.",
      "Virtual reality headsets have replaced marital counseling with 99% efficacy."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman notes that in the digital age, couples often live like roommates in parallel orbits. A study of young couples revealed they spent an average of only 35 minutes a week talking to each other, much of it transactional. Devices create perpetual distractions that choke off bids for connection unless boundaries are intentionally established.",
    "citation": "Chapter 10: “Unplugging” from Distractions"
  },
  {
    "id": "dq58",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why do financial disagreements between spouses often trigger disproportionate rage, panic, and stubborn gridlock compared to other solvable problems?",
    "options": [
      "Because money is mathematically complex and few people understand compound interest.",
      "Because money is rarely just about dollars and cents; it is a canvas onto which people project their deepest existential needs—symbolizing freedom, security, power, pleasure, self-worth, or love.",
      "Because state laws strictly divide marital property upon marriage.",
      "Because men always value spending while women always value saving."
    ],
    "correctAnswer": 1,
    "explanation": "Financial arguments are rarely disputes over simple arithmetic. To one partner, having a large savings cushion represents survival and security; to the other, spending represents freedom, joy, and autonomy. Until the hidden emotional and symbolic meanings of money are uncovered, budgeting discussions will remain explosive battlefield clashes of values.",
    "citation": "Chapter 10: Money, Money, Money"
  },
  {
    "id": "dq59",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "What profound psychological and physiological truth did Gottman’s research uncover regarding husbands sharing domestic housework and childcare?",
    "options": [
      "Housework has no measurable effect on marital satisfaction as long as the house is clean.",
      "Doing housework causes husbands to lose their masculine identity and reduces marital passion.",
      "When husbands willingly take on housework without being nagged, wives perceive it as an expression of love, respect, and emotional care; this reduces wives' physiological stress levels and significantly increases marital and sexual satisfaction.",
      "Couples should never do chores together because it increases the frequency of criticism."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman found that domestic chores carry enormous emotional significance, especially for women. When a husband pitches in without keeping score or waiting to be asked, his wife feels respected and supported as a valued partner. Her biological stress drops, and she experiences greater romance and desire.",
    "citation": "Chapter 10: Housework"
  },
  {
    "id": "dq60",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 10's section on 'Becoming Parents', how can couples prevent the sharp marital decline that affects 67% of new parents after a baby arrives?",
    "options": [
      "By sending the child to boarding school at six months of age.",
      "By agreeing that the mother handles 100% of infant care while the father focuses exclusively on work.",
      "By avoiding all discussion of parenting styles until the child turns five.",
      "By actively including the father from day one and avoiding maternal gatekeeping, ensuring the husband bonds deeply with the baby and feels like an equal partner rather than an excluded outsider."
    ],
    "correctAnswer": 3,
    "explanation": "Gottman emphasizes that when a baby is born, the mother's intense biological bonding with the infant can inadvertently sidelight the father, making him feel unneeded and discarded. Welcoming the father into direct infant care without micromanaging or criticizing his methods expands the marital 'we' into family 'we-ness'.",
    "citation": "Chapter 10: Becoming Parents"
  },
  {
    "id": "dq61",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is a 'Sexual Love Map' in Chapter 10, and why is it essential for sustaining passion and romance in long-term marriage?",
    "options": [
      "An open, non-judgmental understanding of each partner's sexual desires, turn-ons, turn-offs, fantasies, and emotional prerequisites for arousal, acknowledging that great sex begins outside the bedroom.",
      "A diagram of anatomical acupuncture points.",
      "A rigid weekly calendar schedule that mandates exact times for physical intimacy.",
      "A checklist of sexual positions downloaded from clinical therapy journals."
    ],
    "correctAnswer": 0,
    "explanation": "A Sexual Love Map extends Principle 1 into physical intimacy. It requires talking candidly about what makes each partner feel loved, desired, turned on, or turned off without feeling judged or humiliated. Gottman notes that for 70% of men and women, sexual satisfaction is dictated by the quality of marital friendship.",
    "citation": "Chapter 10: Sex"
  },
  {
    "id": "dq62",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the profound core truth behind Principle 6: What actually fuels every gridlocked, irreconcilable fight?",
    "options": [
      "Extreme stubbornness and refusal to grow up.",
      "An unacknowledged, unrespected life dream (aspirations, identity, emotional safety, or legacy) buried underneath the surface argument.",
      "Hidden financial fraud that one spouse is concealing.",
      "A clash of astrological incompatible signs."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman's breakthrough discovery was that gridlocked conflict is never really about the topic on the table (dirty laundry, spending, dinner schedules). It is fueled by unfulfilled, hidden life dreams—profound longings for freedom, security, peace, adventure, or spiritual connection—that the partner feels are being crushed or ignored.",
    "citation": "Chapter 11: Principle 6: Overcome Gridlock"
  },
  {
    "id": "dq63",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the role of the listener when using 'The Dream Catcher’s Magic Questions' to unlock a gridlocked issue?",
    "options": [
      "To point out logical inconsistencies in the partner's dream.",
      "To calculate the dollar cost of fulfilling the dream.",
      "To act like a non-judgmental interviewer or detective, uncovering what the dream symbolizes and its backstory, without trying to solve or debate it.",
      "To agree immediately to surrender and give the partner whatever they want."
    ],
    "correctAnswer": 2,
    "explanation": "When doing the Dream Catcher exercise, you are NOT negotiating or problem-solving. The listener's sole objective is to be a supportive detective: ask open questions ('What is the story behind this?', 'What does this symbolize to you?'), listen with curiosity, and validate the deep human yearning behind the position.",
    "citation": "Chapter 11: The Dream Catcher’s Magic Questions"
  },
  {
    "id": "dq64",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In the case of Ed and Luanne in Chapter 11, their marriage was on the brink of collapse over the monthly expense of boarding Luanne's nine-year-old horse, Daphne. What was the hidden dream underlying this bitter conflict?",
    "options": [
      "Luanne was trying to bankrupt Ed so she could win alimony in divorce court.",
      "Ed wanted to sell the horse so he could buy an expensive luxury yacht.",
      "Daphne was an aggressive horse that had kicked Ed in the pasture.",
      "To Luanne, owning and riding Daphne represented her childhood freedom, autonomy, competence, and a sacred sanctuary away from stress; Ed's insistence that she sell Daphne felt like an attack on her core self."
    ],
    "correctAnswer": 3,
    "explanation": "On the surface, Ed saw a massive monthly bill draining their bank account, while Luanne resisted fiercely. Uncovering her dream revealed that riding Daphne connected her to her deepest sense of identity, self-worth, and emotional freedom. Once Ed understood what the horse symbolized, he no longer saw it as foolish indulgence, and they negotiated a sustainable budget that preserved Daphne.",
    "citation": "Chapter 11: A Horse Named Daphne"
  },
  {
    "id": "dq65",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Chapter 11, what is a primary diagnostic clue that indicates an argument is being fueled by a hidden dream rather than a practical disagreement?",
    "options": [
      "You view your partner as the sole source of the marital difficulty, branding them as inherently flawed (e.g., 'He is just a lazy slob' or 'She is selfish and irresponsible'), unable to see that their behavior is tied to a core longing.",
      "The argument only happens on weekends.",
      "The argument can be resolved in less than five minutes using a calculator.",
      "Both partners agree on the exact budget down to the penny."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman explains that when a hidden dream is buried, we pathologize our partner. Instead of recognizing that their rigid stance is guarding a sacred aspiration (e.g., security, independence, legacy), we reduce them to a character flaw: 'He's just cheap,' or 'She's just reckless.' Acting as a Dream Detective uncovers the longing behind the stubborn behavior.",
    "citation": "Chapter 11: Become a Dream Detective"
  },
  {
    "id": "dq66",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to Gottman, what are the three progressive levels of honoring your spouse’s life dreams?",
    "options": [
      "(1) Ignoring the dream, (2) tolerating it, (3) charging interest on loans for it.",
      "(1) Expressing genuine understanding and interest in the dream, (2) offering emotional and financial support to enable it, and (3) actively participating in the dream with your partner.",
      "(1) Writing the dream down, (2) hiring a life coach, (3) retiring early together.",
      "(1) Approving the dream, (2) vetoing impractical parts, (3) supervising execution."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman outlines three levels: Level 1 is listening with interest and validating what the dream means to them (even if you don't share it); Level 2 is providing tangible or emotional support (e.g., funding classes, watching the kids); Level 3 is fully joining them in pursuing the dream as a shared adventure. All three levels are beneficial.",
    "citation": "Chapter 11: Principle 6: Overcome Gridlock"
  },
  {
    "id": "dq67",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are the 'Four Pillars of Shared Meaning' that elevate a marriage into a shared spiritual journey?",
    "options": [
      "Faith, Hope, Charity, and Obedience",
      "Financial Wealth, Parenting Success, Professional Prestige, and Social Status",
      "Rituals of Connection, Support for Each Other’s Roles, Shared Goals, and Shared Values/Symbols",
      "Vacations, Anniversaries, Birthdays, and Holidays"
    ],
    "correctAnswer": 2,
    "explanation": "Principle 7 is about building an inner life together as a couple. The four pillars are: (1) Rituals of connection (eating dinner together, morning coffee); (2) Supporting each other's life roles (what it means to be a father, worker, wife); (3) Shared goals (working toward common philanthropic, creative, or community aspirations); and (4) Shared symbols and values (family philosophies, heirlooms, traditions).",
    "citation": "Chapter 12: The Four Pillars of Shared Meaning"
  },
  {
    "id": "dq68",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "medium",
    "type": "concept",
    "question": "What distinguishes an intentional 'Ritual of Connection' (Pillar 1) from an ordinary daily habit or routine in a marriage?",
    "options": [
      "A ritual must involve formal religious ceremonies approved by clergy.",
      "A ritual is any activity that takes longer than four hours to complete.",
      "A ritual is an involuntary habit that couples perform without thinking.",
      "A ritual is a structured, repeatable event that both partners look forward to and agree upon, imbued with shared emotional and symbolic significance that reinforces their sense of togetherness."
    ],
    "correctAnswer": 3,
    "explanation": "Drawing on sociologist William Doherty (*The Intentional Family*), Gottman highlights that rituals of connection are deliberate, structured moments—such as a morning coffee routine, a specific greeting at the front door, a Friday night date, or an annual holiday tradition—where the couple consciously communes and reaffirms their bond.",
    "citation": "Chapter 12: Pillar One: Rituals of Connection"
  },
  {
    "id": "dq69",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "hard",
    "type": "concept",
    "question": "How does honoring your partner’s psychological 'Roles' (Pillar 2 of Shared Meaning) strengthen the marital bond?",
    "options": [
      "By recognizing that each spouse holds deep, cherished identities (e.g., provider, nurturer, protector, artist, mentor) and actively validating their self-concept rather than belittling or competing with it.",
      "By assigning strict traditional gender divisions of labor to avoid ambiguity.",
      "By ensuring both partners work in the same professional industry.",
      "By rotating who acts as the primary spouse every six months."
    ],
    "correctAnswer": 0,
    "explanation": "People construct their self-worth around the roles they embody. If a husband views himself as a protector and provider, or a wife views herself as an intellectual mentor or healer, having their partner respect, support, and appreciate that role creates profound emotional harmony and shared purpose.",
    "citation": "Chapter 12: Pillar Two: Support for Each Other’s Roles"
  },
  {
    "id": "dq70",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Pillar 4 ('Shared Values and Symbols'), what does Gottman say about the role of family symbols, heirlooms, and shared narratives in building a lasting marriage?",
    "options": [
      "They are expensive decorations that display wealth to neighbors.",
      "They establish a unique family 'micro-culture' with its own philosophy, shared history, and sacred symbols that define who 'we' are in contrast to the outside world.",
      "They distract spouses from discussing unresolved conflict.",
      "They must be discarded every decade to keep the relationship modern."
    ],
    "correctAnswer": 1,
    "explanation": "Every healthy marriage creates its own unique culture—replete with inside jokes, family sayings, cherished physical symbols (a framed photo, an inherited dining table), and shared values. This shared culture forms a boundary of meaning that enriches their life journey together.",
    "citation": "Chapter 12: Pillar Four: Shared Values and Symbols"
  },
  {
    "id": "dq71",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "easy",
    "type": "concept",
    "question": "Why does Gottman recommend a kiss that lasts at least SIX SECONDS during the daily reunion at the end of the workday?",
    "options": [
      "Because six seconds is the minimum time needed to check for alcohol consumption.",
      "Because it is an ancient religious commandment from marital vows.",
      "Because a six-second kiss is long enough to stop the rush of daily stress, release oxytocin, and create a momentary sanctuary that is worth coming home to.",
      "Because six seconds allows your pulse rate to accelerate to 130 bpm."
    ],
    "correctAnswer": 2,
    "explanation": "A quick, distracted peck on the cheek as you walk past each other communicates disinterest. A six-second kiss cannot be done on autopilot; it forces you to pause, put down your phone/bags, look at each other, and physiologically transition from the outside working world into a loving haven.",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq72",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the weekly 1-hour 'State of the Union' meeting, how does Gottman structure the dialogue to guarantee safety and prevent escalation?",
    "options": [
      "Read a list of grievances for 45 minutes, then spend 15 minutes drafting penalties.",
      "Allow only the wife to speak during the first half hour, and only the husband during the second half hour.",
      "Require that all criticisms be written anonymously on index cards.",
      "Begin with what went right and express 5 specific appreciations, address issues using softened start-up and the two-circle method, process any regrettable incident, and conclude with 'What can I do to make you feel loved this coming week?'"
    ],
    "correctAnswer": 3,
    "explanation": "The State of the Union blueprint starts from abundance: 5 concrete appreciations. Then, any conflict or regrettable incident from the week is processed using softened start-up and subjective realities. It closes with a loving commitment: 'What can I do to make you feel loved this coming week?'",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq73",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the counter-intuitive discovery behind the 'Marital Poop Detector' in the Afterword?",
    "options": [
      "Happy couples actually have a LOW threshold for negativity—they voice small irritations early with softened start-up rather than letting resentment fester beneath the surface.",
      "Distressed couples complain too much, so happy couples learn to tolerate bad behavior in silence.",
      "Successful couples install sewage monitors in their bathrooms.",
      "Couples who ignore dirty dishes have 50% fewer arguments."
    ],
    "correctAnswer": 0,
    "explanation": "Popular psychology suggests 'letting the little things slide' to avoid being nagging. But Gottman found the opposite: happy couples have a highly sensitive 'Marital Poop Detector' (low threshold for negativity). They gently bring up small annoyances early before they rot into toxic resentment and contempt.",
    "citation": "Afterword: The Marital Poop Detector"
  },
  {
    "id": "dq74",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the Afterword, what is the exact weekly time budget and component structure of Gottman’s 'Magic Six Hours'?",
    "options": [
      "6 hours of couple’s therapy with a licensed psychologist every Saturday morning.",
      "Partings (10 min), Reunions (1 hr 40 min), Admiration/Appreciation (35 min), Affection (35 min), Weekly Date (2 hr), State of the Union Meeting (1 hr).",
      "1 hour of quiet reading, 2 hours of gym workouts, 2 hours of meal prep, and 1 hour of household budgeting.",
      "3 hours of romantic movies on Friday and 3 hours of outdoor sports on Sunday."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman discovered that workshop participants whose marriages continued to flourish devoted just six hours a week to specific rituals: Partings (2 min x 5 days = 10 min), Reunions (20 min x 5 days = 1 hr 40 min), Admiration & Appreciation (5 min x 7 days = 35 min), Affection (5 min x 7 days = 35 min), Weekly Date (2 hours), and State of the Union Meeting (1 hour). Total: roughly 6 hours!",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq75",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the specific requirement for the 2-minute 'Partings' ritual each morning before partners separate for the day in the Magic Six Hours?",
    "options": [
      "Checking that all household doors and windows are securely locked.",
      "Handing your spouse a detailed itinerary of your day's schedule.",
      "Finding out at least ONE thing that is happening in your spouse's life that day (e.g., a stressful meeting, a doctor's visit, lunch with a friend) before saying goodbye.",
      "Singing a romantic song together in the kitchen."
    ],
    "correctAnswer": 2,
    "explanation": "In the Magic Six Hours, morning partings take only 2 minutes. The goal is to discover at least one significant event happening in your partner's life that day. This keeps your Love Map updated and provides an immediate bridge for connection and inquiry when you reunite in the evening.",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq76",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the Seattle Love Lab, how did John Gottman and Robert Levenson use the 'Video Recall' procedure with a continuous rating dial to uncover couples' internal emotional states?",
    "options": [
      "Couples watched television comedies while doctors adjusted their room temperature via dial.",
      "Therapists used a dial to rate the volume of the spouses' voices to detect shouting matches.",
      "Spouses turned a dial to vote on who won each argument, with the winner receiving financial compensation.",
      "Spouses re-watched the videotape of their conflict discussion while turning a rating dial from 1 (very negative) to 9 (very positive), providing a continuous second-by-second readout of their subjective feelings that was synchronized with physiological data."
    ],
    "correctAnswer": 3,
    "explanation": "In Gottman and Levenson's breakthrough Love Lab methodology, couples returned to the laboratory after their taped conflict to watch the recording. Each spouse turned a continuous rating dial (ranging from extremely negative to neutral to extremely positive) to report exactly what they were feeling second-by-second during the fight. By synchronizing this video recall dial with simultaneous recordings of heart rate, skin conductance, and blood velocity, the researchers could decode the precise moments when physiological arousal and internal distress surged.",
    "citation": "Chapter 1: Innovative Research, Revolutionary Findings"
  },
  {
    "id": "dq77",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Janice Kiecolt-Glaser and Ronald Glaser's landmark 10-year newlywed study cited in Chapter 1, what biochemical finding during a single conflict discussion distinguished couples who divorced a decade later?",
    "options": [
      "Couples who later divorced exhibited 34% higher levels of adrenaline in their bloodstream during conflict, and their adrenaline levels remained abnormally elevated throughout the night while they slept.",
      "Couples who divorced had significantly lower serotonin levels during breakfast.",
      "Divorced spouses had twice the level of glucose in their saliva immediately after arguing.",
      "Couples who stayed married had zero cortisol release during any argument."
    ],
    "correctAnswer": 0,
    "explanation": "Janice Kiecolt-Glaser and Ronald Glaser at The Ohio State University measured stress hormones in the blood of newlywed couples during conflict discussions. Ten years later, they found that spouses who ultimately divorced had produced 34% more adrenaline during that initial argument than those who remained happily married. Furthermore, their adrenaline remained significantly elevated hours later while they slept, demonstrating that hostile marital conflict leaves a prolonged, toxic physiological footprint.",
    "citation": "Chapter 1: Why Save Your Marriage?"
  },
  {
    "id": "dq78",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did psychologist Dolf Zillmann's experiments at the University of Alabama reveal regarding gender differences in recovery from emotional arousal and stress?",
    "options": [
      "Women experience faster adrenaline surges than men when provoked.",
      "When male subjects were treated rudely and then told to sit quietly and relax for twenty minutes, their cardiovascular arousal and blood pressure remained elevated until they had an opportunity to retaliate, whereas women calmed down much more rapidly without needing retaliation.",
      "Men were completely immune to rude treatment if they had consumed sugar.",
      "Both men and women returned to baseline heart rates in exactly four minutes."
    ],
    "correctAnswer": 1,
    "explanation": "Dolf Zillmann's research on excitation transfer and autonomic arousal showed that when men were deliberately insulted and told to sit quietly for twenty minutes, their blood pressure and cardiovascular stress remained high and climbing because they engaged in distress-maintaining thoughts of righteous indignation ('I'll get even'). They did not calm down until they could retaliate. In contrast, women were far more likely to engage in self-soothing and conciliatory thoughts, allowing their autonomic nervous systems to reset without vengeance.",
    "citation": "Chapter 3: Men and Women Really Are Different"
  },
  {
    "id": "dq79",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does Gottman define 'Belligerence', a destructive behavior closely allied with Contempt?",
    "options": [
      "A passive-aggressive silence where a partner refuses to eat dinner.",
      "An involuntary facial twitch around the mouth and eyes.",
      "An aggressive form of anger that issues an overt threat, challenge, or provocation (such as asking 'Well, what are you going to do about it?' or 'What are you going to do, sue me?').",
      "Constructive criticism expressed with an academic vocabulary."
    ],
    "correctAnswer": 2,
    "explanation": "Belligerence is a close cousin of contempt and is just as lethal to marital stability. Unlike simple anger, belligerence is aggressively provocative and confrontational—it directly challenges the spouse's authority or feelings with threats or dares ('What are you going to do about it?'). It establishes a hostile power contest that shuts down collaboration and rapidly accelerates emotional flooding.",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq80",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the psychological mechanism underlying the daily statements and exercises in the 'Seven-Week Course in Fondness and Admiration' (e.g., Week 4 Friday: 'Think of a marriage you know that’s awful')?",
    "options": [
      "It uses behavioral punishment to eliminate undesirable habits.",
      "It requires spouses to sign a legal oath promising never to disagree on weekends.",
      "It forces partners to memorize romantic poetry to recite during breakfast.",
      "Based on cognitive therapy principles for depression, it counteracts 'distress-maintaining thoughts' by systematically rehearsing positive cognitions and deliberate appreciative tasks until positive scanning of one's partner becomes automatic."
    ],
    "correctAnswer": 3,
    "explanation": "Gottman explains that when marital fondness dims, spouses succumb to 'distress-maintaining thoughts'—a cognitive distortion where they selectively fixate on partner flaws and ignore virtues, creating chronic hopelessness similar to clinical depression. The Seven-Week Course adapts cognitive therapy: by pairing a daily positive thought (e.g., 'I was really lucky to meet my spouse') with a concrete action, it systematically retrains the brain's perceptual filter to notice and cherish the partner's positive contributions.",
    "citation": "Chapter 5: Exercise 4: A Seven-Week Course in Fondness and Admiration"
  },
  {
    "id": "dq81",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In Chapter 6, Lena snaps at her husband Carl in exasperation: 'It would never occur to you to clear the table, would it?' Why does Gottman identify this as a prime example of a 'missed bid' for connection?",
    "options": [
      "Because beneath Lena's prickly criticism lies a genuine bid for connection and assistance ('Please help me clear the table tonight'); reacting defensively to her harsh tone causes Carl to miss the underlying plea.",
      "Because Carl had already cleared the table twenty minutes earlier.",
      "Because table-clearing is statistically correlated with extramarital infidelity.",
      "Because bids for connection can only occur in the bedroom, never in the kitchen."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman notes that a major obstacle to turning toward is that bids often arrive poorly packaged, wrapped in anger or criticism. When Lena asks sarcastically if it would ever occur to Carl to clear the table, she is making a bid for teamwork and help. Carl hears only attack and responds with defensiveness ('Well, when do you ever fill the gas tank?'). Learning to recognize the vulnerable bid concealed inside a spouse's clumsy or frustrated words prevents unnecessary conflict.",
    "citation": "Chapter 6: Two Obstacles to Turning Toward"
  },
  {
    "id": "dq82",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to the Positive Sentiment Override (PSO) Questionnaire in Chapter 6, how does a spouse in PSO interpret their partner coming home in a foul, irritable mood?",
    "options": [
      "They assume they are about to get blamed and criticized for domestic failures.",
      "They assume their partner had a stressful day or that something external happened, and their natural impulse is to offer comfort rather than feel personally attacked.",
      "They immediately lock themselves in the bedroom to avoid confrontation.",
      "They call their partner's employer to complain about workplace stress."
    ],
    "correctAnswer": 1,
    "explanation": "The PSO Questionnaire illustrates the stark perceptual divide created by emotional friendship. In Negative Sentiment Override, when a partner enters in a bad mood, the spouse anticipates personal attack: 'I feel like I am going to get blamed,' 'I fear a storm of negativity.' In Positive Sentiment Override, the spouse gives the partner the benefit of the doubt: 'I assume my partner is simply stressed,' and 'I want to comfort my partner if I can.'",
    "citation": "Chapter 6: Positive Sentiment Override Questionnaire"
  },
  {
    "id": "dq83",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "concept",
    "question": "While 'turning against' a partner’s bid for connection involves open hostility, why does Gottman warn that chronic 'turning away' (ignoring, remaining glued to a screen) is often more fatal to a marriage?",
    "options": [
      "Because turning away causes immediate hearing loss in the speaking partner.",
      "Because turning away is classified as a legal misdemeanor in divorce courts.",
      "Because a spouse whose bids are chronically ignored eventually gives up on seeking connection entirely; the relationship drifts into cold parallel lives and emotional vacancy where trust quietly starves to death.",
      "Because spouses who turn away spend twice as much money on online shopping."
    ],
    "correctAnswer": 2,
    "explanation": "When a partner turns against a bid with irritation, there is at least passionate engagement. But chronic 'turning away'—failing to look up from a phone, offering dead silence or absent grunts—communicates complete insignificance. The rebuffed partner eventually internalizes the rejection and stops reaching out. Over time, emotional investment vanishes, the emotional bank account empties, and the couple drifts into roommate status.",
    "citation": "Chapter 6: Principle 3: Turn Toward Each Other Instead of Away"
  },
  {
    "id": "dq84",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In the 'Gottman Island Survival Game' (Chapter 7), couples must rank-order ten items out of twenty-six shipwreck supplies (e.g., compass, flares, whiskey, condoms). What is the primary diagnostic purpose of this exercise?",
    "options": [
      "To test whether couples possess practical wilderness survival skills.",
      "To determine whether husbands are better at navigation than wives.",
      "To force couples to agree on an exact financial value for survival gear.",
      "To observe how partners negotiate without objective right answers, diagnosing whether they share power, listen receptively, and accept influence versus attempt to dominate, veto, or withdraw in a sulk."
    ],
    "correctAnswer": 3,
    "explanation": "Because there are no objectively correct choices among the twenty-six shipwreck items, the Island Survival Game is a pure laboratory test of marital power dynamics and influence. Couples must synthesize their separate rankings into a single consensus list. Emotionally intelligent couples treat the negotiation as a collaborative game where both voices hold sway, whereas influence-resisting spouses attempt to bulldoze their partner's preferences or withdraw petulantly when challenged.",
    "citation": "Chapter 7: Exercise 2: The Gottman Island Survival Game"
  },
  {
    "id": "dq85",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Chapter 8, Gottman quotes marital therapist Dan Wile (*After the Honeymoon*) to capture the existential reality of perpetual problems. What is Wile's central insight?",
    "options": [
      "'When choosing a long-term partner, you will inevitably be choosing a particular set of unsolvable problems that you’ll be grappling with for the next ten, twenty, or fifty years.'",
      "'Whoever loves least in a relationship controls the outcome of all arguments.'",
      "'All marital conflict can be eliminated if couples undergo five years of psychoanalysis.'",
      "'Marriage is an economic merger where emotions must be suppressed in favor of logic.'"
    ],
    "correctAnswer": 0,
    "explanation": "Dan Wile's brilliant formulation highlights that there is no 'problem-free' spouse. If Paul married Alice, who gets loud at parties, he struggles with her party demeanor; but if Paul had married Susan, he would fight before arriving because Paul is chronically late and Susan detests waiting. Marital success does not depend on finding a partner without flaws, but on choosing a person whose enduring quirks and perpetual issues you can manage with humor and affection.",
    "citation": "Chapter 8: Perpetual Problems"
  },
  {
    "id": "dq86",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Step 2 of problem solving, why does Gottman provide a structured, scripted checklist of repair phrases across six categories ('I Feel', 'I Need to Calm Down', 'Sorry', 'Get to Yes', 'Stop Action!', 'I Appreciate') and suggest calling them out by number?",
    "options": [
      "Because legal arbitration mandates the use of scripted dialogue during marital mediation.",
      "Because when spouses are flooded during conflict, the brain loses the capacity for spontaneous, nuanced diplomacy; a formal script acts like an unmistakable megaphone that cuts through tension and signals the intent to brake.",
      "Because couples who read scripts burn 30% more calories during heated arguments.",
      "Because repair attempts are only statistically effective if spoken in alphabetical order."
    ],
    "correctAnswer": 1,
    "explanation": "During heated arguments, adrenaline surges and higher cognitive flexibility vanishes, making it exceedingly difficult to invent graceful apologies on the fly. Gottman's scripted checklist provides an overt, formalized mechanism. By literally reading a phrase from the list or announcing 'I'm making repair #6 under I Feel: I'm feeling sad,' partners bypass ambiguity and wave a clear, recognizable white flag that their spouse can easily accept.",
    "citation": "Chapter 9: Step 2: Learn to Make and Receive Repair Attempts"
  },
  {
    "id": "dq87",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the 2015 edition of Chapter 9, what concrete technological tool does Gottman recommend couples use during conflict discussions to monitor and halt biological flooding?",
    "options": [
      "A smartphone voice decibel analyzer that sounds a siren if either spouse shouts.",
      "A thermal imaging camera to track facial temperature variations during arguments.",
      "An FDA-approved finger pulse oximeter (or biofeedback device like the emWave) set to alert partners if their heart rate climbs above 100 bpm (or 80 bpm for conditioned athletes), triggering an immediate break.",
      "A polygraph lie-detector machine strapped to both spouses' wrists."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman highlights that spouses often fail to recognize their own internal physiological flooding until damage is already done. An inexpensive, FDA-approved finger pulse oximeter or a biofeedback device like HeartMath's emWave provides an objective physiological benchmark. If a spouse's heart rate surges past 100 bpm (or 80 bpm for athletes), the alarm triggers a mandatory cooling break of at least 20 to 30 minutes.",
    "citation": "Chapter 9: Step 3: Soothe Yourself and Each Other"
  },
  {
    "id": "dq88",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 10, what counter-intuitive discovery did Gottman find when using mathematical Game Theory to model sexual frequency between Jim (high desire) and Mary (lower desire)?",
    "options": [
      "When Jim sulked or imposed a negative payoff whenever Mary said no, sexual frequency remained constant.",
      "Mary's sexual desire was completely unaffected by Jim's emotional reactions.",
      "Sexual frequency was maximized only when Jim initiated sex on a rigid, unvarying calendar schedule.",
      "When Jim punished Mary's refusals with resentment or sulking, they had sex once every three weeks; but when Jim rewarded her 'no' with a positive payoff (warmth, affection, and understanding), their sexual frequency soared to four times a week."
    ],
    "correctAnswer": 3,
    "explanation": "Gottman's game-theory simulation revealed a profound dynamic: when the high-desire spouse penalizes sexual refusal with a 'negative payoff' (guilt trips, coldness, sulking), the low-desire partner experiences sex as an intimidating obligation, causing desire to wither. But when the husband rewards a 'no' with emotional safety and genuine affection, the wife feels respected and unpressured, dramatically increasing her spontaneous desire and openness to intimacy.",
    "citation": "Chapter 10: Sex"
  },
  {
    "id": "dq89",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the 2015 edition's section 'The Problem with Porn' (Chapter 10), how does Gottman distinguish habitual solitary pornography use from masturbation without porn?",
    "options": [
      "Masturbation without porn is actually correlated with more frequent sex between spouses, whereas habitual solitary porn use leads to less frequent marital sex, diminished communication, conditioning to masturbatory fantasies the spouse may not share, and elevated betrayal risk.",
      "Habitual porn use increases marital romance by introducing new ideas, while masturbation without porn does not.",
      "Pornography use is biologically identical to dreaming and has zero effect on marital bonding.",
      "Gottman claims that masturbation in any form leads to immediate divorce within two years."
    ],
    "correctAnswer": 0,
    "explanation": "Gottman clarifies that masturbation itself is not harmful; research shows couples who masturbate without porn actually engage in marital sex more frequently. In contrast, habitual solitary porn use conditions the brain's dopamine and oxytocin release to impersonal, transfixed masturbatory fantasies. This erodes intimate communication, reduces sexual frequency with the spouse, leaves the partner feeling inadequate or objectified, and frequently serves as a gateway to emotional or physical betrayal.",
    "citation": "Chapter 10: The Problem with Porn"
  },
  {
    "id": "dq90",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In Chapter 10, Mike wanted sex several times a week while Lynne wanted it once every other week. As Mike pressured her, Lynne's desire plummeted. What breakthrough protocol resolved their standoff?",
    "options": [
      "Lynne agreed to submit to Mike's schedule on alternating Tuesdays.",
      "They shifted focus from intercourse to sensuality, and Lynne (the partner with the lower desire) was placed completely in charge of directing their sensual evenings (such as massage) with no expectation of intercourse.",
      "Mike was advised to take herbal supplements to lower his testosterone levels.",
      "They agreed to hire an intimacy coach to supervise their bedroom activities."
    ],
    "correctAnswer": 1,
    "explanation": "When couples experience a severe desire disparity, pressuring the low-desire spouse only heightens anxiety and emotional resistance. Gottman advised Mike and Lynne to decouple physical closeness from the goal of intercourse. By putting Lynne—the lower-desire partner—completely in charge of their sensual experiences (directing nonsexual massages without pressure for orgasm), her feeling of control was restored, and her natural sexual appetite steadily returned.",
    "citation": "Chapter 10: Sex"
  },
  {
    "id": "dq91",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "Citing researcher Shere Hite's groundbreaking work (*The Hite Report*), what common cultural trap in lovemaking does Gottman advise couples to abandon?",
    "options": [
      "The belief that sex should only take place with the lights completely off.",
      "The tradition of buying flowers before initiating romantic conversations.",
      "The goal-oriented approach that treats orgasm as a 'touchdown' ('the Big O'), which fuels sexual performance anxiety; couples should instead view all positive daily attunement as sex and foreplay.",
      "The practice of cuddling for more than ten minutes before falling asleep."
    ],
    "correctAnswer": 2,
    "explanation": "In *The Hite Report*, women voiced deep frustration that men treated lovemaking like a football game where achieving orgasm was the only 'touchdown' that counted. This narrow focus creates performance anxiety and robs couples of present-moment intimacy. Gottman urges couples to expand their definition of sex to include all tender caressing, kissing, and talking, adopting the motto: 'Every positive thing you do in your relationship is foreplay.'",
    "citation": "Chapter 10: Redefine What You Mean by “Sex”"
  },
  {
    "id": "dq92",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "Citing British sociologist Ann Oakley's research on domestic labor, what does Gottman reveal about housework, gender perceptions, and female sexual desire?",
    "options": [
      "Men and women have identical mental records of the chores they perform each week.",
      "Doing domestic chores lowers female libido by creating physical fatigue.",
      "Couples who hire maid services have a 95% lower divorce rate than couples who clean together.",
      "Men consistently overestimate the amount of housework they do; furthermore, what boosts a wife's sexual desire is not a mathematical 50/50 division of labor, but her subjective perception that her husband takes on chores proactively without having to be asked."
    ],
    "correctAnswer": 3,
    "explanation": "Sociologist Ann Oakley established that husbands routinely overestimate their domestic contributions (Gottman jokes that when he thinks he does 100% of the housework, his wife Julie knows he's actually doing half). More importantly, Gottman discovered that female desire is deeply responsive to partnership: women find a man's proactive willingness to handle chores without nagging profoundly erotic, because it demonstrates emotional respect and care.",
    "citation": "Chapter 10: Housework"
  },
  {
    "id": "dq93",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 10's financial guidelines, why does Gottman warn couples against constructing a household budget that forces 'martyrdom' on either spouse (as resolved in the Linda and Devon case)?",
    "options": [
      "Because forcing either partner to completely surrender their core personal pleasures (e.g., gym memberships, ski trips) breeds toxic resentment; financial plans must balance security with autonomy through structures like separate personal accounts alongside a joint account.",
      "Because financial martyrdom violates federal tax codes regarding joint filings.",
      "Because martyrdom causes couples to spend too much money on life insurance.",
      "Because budgets with martyrdom are statistically correlated with early retirement."
    ],
    "correctAnswer": 0,
    "explanation": "Budgeting often fails when couples impose austerity measures that eliminate the small pleasures essential to a partner's well-being. Devon viewed Linda's gym and clothes as frivolous, while Linda viewed Devon's ski trips as self-indulgent. Gottman stresses that a sustainable budget cannot demand martyrdom. Linda and Devon resolved their gridlock by establishing three bank accounts—one joint account for household necessities and two individual accounts for personal discretionary spending without spousal veto.",
    "citation": "Chapter 10: Money, Money, Money"
  },
  {
    "id": "dq94",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In the Chapter 10 exercise on In-Law Problems, how does Gottman instruct a partner to respond if their spouse feels slighted or unsupported regarding a relative, even if the partner personally believes their own parents did nothing wrong?",
    "options": [
      "Arrange a debate where the parents and spouse cross-examine each other before a therapist.",
      "Recognize that marital safety is governed by perception: if your spouse feels that you side with your parents over them, you must validate that concern and work to demonstrate unwavering solidarity, regardless of whether you agree with their interpretation.",
      "Privately tell your parents to ignore your spouse until they calm down.",
      "Refuse to discuss the matter because blood relations are biologically permanent."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman cautions partners against getting defensive when in-law tensions arise: 'Remember that much about relationships has to do with perception. So, for example, if your wife believes that you side with your own mother against her, that's something you need to work on in your marriage, even if you don't agree with her perception of the situation.' A spouse must prioritize their partner's emotional security over defending their family of origin.",
    "citation": "Chapter 10: Relations with In-Laws"
  },
  {
    "id": "dq95",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "When spouses hold opposing or impractical life aspirations (such as Georgia wanting to pursue dangerous mountain climbing while Nathan is terrified of heights), what are the Three Levels of Honoring a Partner's Dream?",
    "options": [
      "(1) Silent tolerance, (2) financial subsidization, and (3) legal waivers.",
      "(1) Writing the dream in a journal, (2) hiring a life coach, and (3) taking an early retirement.",
      "Level 1: Expressing genuine understanding and asking curious questions without ridicule; Level 2: Actively enabling or helping finance the dream; Level 3: Becoming an enthusiastic co-participant in the dream.",
      "(1) Evaluating the dream's return on investment, (2) approving viable elements, and (3) supervising execution."
    ],
    "correctAnswer": 2,
    "explanation": "Gottman clarifies that honoring a partner's dream does not require abandoning your own values or putting your life in jeopardy. Spouses can support dreams at three levels: Level 1 is listening with warmth, validating what the dream symbolizes, and showing interest; Level 2 is offering logistical or financial support so they can pursue it independently; Level 3 is fully joining them in the adventure. Even achieving Level 1 alone is often enough to dissolve gridlock.",
    "citation": "Chapter 11: Principle 6: Overcome Gridlock"
  },
  {
    "id": "dq96",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Chapter 11's four-step roadmap to overcome gridlock, why does Gottman mandate Step 4: Say 'Thank You' immediately following a difficult compromise session?",
    "options": [
      "To fulfill formal etiquette requirements from classic Victorian counseling manuals.",
      "Because whoever says thank you first is exempt from domestic chores that evening.",
      "To prevent spouses from discussing their dreams ever again.",
      "Because uncovering deeply buried dreams is emotionally exhausting and vulnerable; ending with explicit appreciation for each other's honesty and patience re-establishes safety, mutual respect, and camaraderie."
    ],
    "correctAnswer": 3,
    "explanation": "Discussing gridlocked conflicts and hidden dreams exposes raw vulnerabilities, childhood longings, and deep fears. It can leave partners feeling exposed and emotionally taxed. Step 4 ensures that couples do not walk away feeling bruised; taking three minutes to thank each other for listening without judgment reaffirms the emotional safety of the Sound Relationship House.",
    "citation": "Chapter 11: Step 4: Say “Thank You”"
  },
  {
    "id": "dq97",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "hard",
    "type": "concept",
    "question": "Drawing from sociologist William Doherty (*The Intentional Family*), what defines a meaningful 'Ritual of Connection' (Pillar 1) and protects it from degrading into an empty routine?",
    "options": [
      "It is a deliberate, structured, repeatable event that both partners look forward to, understand the symbolic purpose of, and actively protect from the centrifugal distractions of everyday life.",
      "It must be registered with a local religious organization.",
      "It must cost at least fifty dollars per week to maintain.",
      "It is an involuntary, subconscious habit performed without conscious thought."
    ],
    "correctAnswer": 0,
    "explanation": "Sociologist William Doherty demonstrated that without intentionality, family life naturally succumbs to centrifugal entropy—drifting into mindless, hurried parallel existences. An intentional Ritual of Connection differs from a routine because it is invested with shared emotional and symbolic meaning (e.g., a sacred morning coffee conversation, Nick and Halley's egg-free birthday cake tradition, or Gottman's annual weeklong honeymoon) that both spouses consciously preserve.",
    "citation": "Chapter 12: Pillar One: Rituals of Connection"
  }
];


const DEFAULT_NEVER_SPLIT_SUMMARIES = [
  {
    "id": "ch1",
    "chapterNumber": 1,
    "title": "The New Rules: How to Become the Smartest Person in Any Room",
    "bigIdea": "Negotiation is not a rational chess match of linear problem solving; it is an emotional, psychological process of discovery dominated by System 1 cognitive biases, where tactical empathy and calibrated framing trump traditional compromise.",
    "counterIntuitiveInsights": [
      "Rational bargaining fails in high-stakes human encounters: Traditional negotiation theory (like Fisher and Ury's Getting to Yes) assumed humans are rational actors seeking mutual problem-solving using deliberative logic (System 2). In reality, humans are emotional, irrational, and driven by unconscious cognitive biases (System 1). System 1 feelings are the spring that feeds the river of System 2 choices.",
      "Heart vs. Mind in hostage negotiation history: Modern negotiation was born out of fatal tactical disasters (the 1971 Attica prison riots and 1972 Munich Olympics massacre), and later revolutionized after Ruby Ridge (1992) and Waco (1993). The FBI realized that command-and-control pressure and rational compromise fail against emotionally flooded counterparts; only de-escalation through active listening works.",
      "Being the underdog can be an advantage: Voss, an FBI beat cop, consistently out-negotiated Harvard law professors (Robert Mnookin and Gabriella Blum) not by matching their intellectual horsepower, but by using simple open-ended calibration to let them burn their energy trying to solve his problems.",
      "Cognitive biases distort reality: Decades of research by Daniel Kahneman and Amos Tversky proved that humans do not perceive the world objectively. Rather than fighting cognitive biases, a master negotiator uses them to frame the conversation."
    ],
    "coreMechanics": [
      "System 1 vs. System 2 (Kahneman & Tversky): System 1 is fast, instinctive, animal, and emotional; System 2 is slow, deliberate, and logical. Conducting negotiations based on System 2 logic without engaging System 1 emotions is like trying to make an omelet without breaking eggs.",
      "Emotion as the Lever: Emotions and unconscious desires are not obstacles to overcome; they are the primary means of reaching an agreement."
    ],
    "keyExercises": [
      "Open-Ended Disruption Drill: In response to an aggressive demand, resist the urge to defend, counter-demand, or concede. Instead, pause, breathe, and ask in a calm tone: 'How am I supposed to do that?'"
    ],
    "keyTakeaway": "He who controls the emotional climate of the conversation controls the outcome. Never assume your counterpart is a rational actor."
  },
  {
    "id": "ch2",
    "chapterNumber": 2,
    "title": "Be a Mirror: How to Quickly Establish Rapport",
    "bigIdea": "Negotiation is not a battle of arguments, but a process of discovery. By slowing the tempo down, adopting a calming voice, and mirroring critical words, you build rapid rapport and trigger the counterpart to reveal their hidden strategy.",
    "counterIntuitiveInsights": [
      "Slowing down creates speed: Inexperienced negotiators rush to make points or fill silence, which signals anxiety and causes the counterpart to feel unheard and defensive. Deliberately slowing the tempo calms the room, drops heart rates, and accelerates real agreement.",
      "Smiling alters vocal acoustics: Even over the phone, putting a physical smile on your face shifts your pitch, relieves tension, and activates the counterpart’s mirror neurons, making them mentally agile and inclined to collaborate.",
      "Mirroring is NOT parroting body language: While pop psychology focuses on crossing legs or tilting heads, tactical linguistic mirroring is simply repeating the last 1 to 3 words (or critical words) with an inquisitive tone. It triggers an involuntary cognitive reflex to elaborate.",
      "Direct assertiveness backfires 90% of the time: The aggressive, pushy voice creates friction, resistance, and pushback, whereas the Late-Night FM DJ voice conveys calm, unassailable authority without provoking defensiveness."
    ],
    "coreMechanics": [
      "The Three Negotiating Voice Tones: 1) The Late-Night FM DJ Voice: Deep, soft, slow, downward-inflecting; creates authority and trustworthiness without pushback. 2) The Positive/Playful Voice: Easygoing, light, smiling; default voice for 80%+ of negotiation. 3) The Direct/Assertive Voice: Cold, sharp, aggressive; use rarely or never.",
      "Isopraxism (Linguistic Mirroring): Humans fear what is different and bond with what is similar. Mirroring insinuates similarity and creates neuro-bonding without appearing manipulative."
    ],
    "keyExercises": [
      "The 4-Step Mirroring Routine: 1) Adopt the Late-Night FM DJ or Positive/Playful voice. 2) Start with an apology: 'I'm sorry...' 3) Mirror the counterpart's last 1-3 words (or critical words) with an inquisitive inflection. 4) Maintain Dynamic Silence: Shut up and wait at least 4 seconds for the counterpart to fill the vacuum."
    ],
    "keyTakeaway": "Quiet the voice inside your head, slow the cadence, and mirror their words; your counterpart will negotiate against themselves to fill the silence."
  },
  {
    "id": "ch3",
    "chapterNumber": 3,
    "title": "Don’t Feel Their Pain, Label It: How to Create Trust with Tactical Empathy",
    "bigIdea": "Tactical empathy is emotional intelligence weaponized: recognizing, verbalizing, and neutralizing your counterpart’s unspoken negative emotions before they undermine the deal.",
    "counterIntuitiveInsights": [
      "Empathy is NOT sympathy or agreement: Having empathy does not mean being soft, agreeing with evil people, or compromising your values. It is a dispassionate, clinical understanding of the other side’s worldview and emotional drivers.",
      "Negative emotions block deals twice as hard as positive emotions make them: The barriers to a deal are almost always unspoken fears, mistrust, or perceived threats. Bringing these into the open diffuses them; denying or ignoring them gives them power.",
      "Saying 'I understand' or 'I hear you' destroys trust: Using the pronoun 'I' makes it about you, triggering skepticism ('You don't know anything about how I feel!'). Using neutral labels ('It seems like...', 'It sounds like...') keeps the focus entirely on them.",
      "The Accusation Audit disarms complaints before they start: By voicing every terrible accusation your counterpart could level against you in advance, the complaints sound exaggerated and silly when spoken aloud, prompting the counterpart to reassure you."
    ],
    "coreMechanics": [
      "Neuro-disruption (Lieberman's fMRI findings): Brain scans show that vocalizing and labeling negative emotions deactivates the amygdala (fear/survival center) and shifts cognitive activity to the prefrontal cortex, restoring rational thinking.",
      "Labeling Formula: Always begin with neutral observations: 'It seems like...', 'It looks like...', 'It sounds like...'. Never say 'I think' or 'I understand'.",
      "The Accusation Audit: Proactively exhausting all negative perceptions at the start of a meeting to wipe the emotional slate clean."
    ],
    "keyExercises": [
      "The Accusation Audit Script: Before pitching a controversial idea or admitting a mistake, open with: 'Before we begin, you are probably going to think that I am unprepared, taking advantage of your goodwill, and being completely unreasonable...'. Then wait for them to say, 'No, don't worry, let's hear it.'",
      "Labeling & Dynamic Silence: Identify an unspoken frustration, deliver a label ('It sounds like you feel unappreciated for the extra hours your team put in'), and stop speaking entirely."
    ],
    "keyTakeaway": "Clear the emotional brush before planting seeds. Name the negative emotion to tame it, and let silence do the heavy lifting."
  },
  {
    "id": "ch4",
    "chapterNumber": 4,
    "title": "Beware “Yes”—Master “No”: How to Generate Momentum and Make It Safe to Reveal the Real Stakes",
    "bigIdea": "Pushing for 'Yes' triggers defensiveness and produces counterfeit agreement; triggering 'No' protects the counterpart’s autonomy, creates emotional safety, and begins the real negotiation.",
    "counterIntuitiveInsights": [
      "'Yes' is often a trap; 'No' is protection: Being pushed to say 'Yes' makes people feel trapped, wary of hidden commitments. Saying 'No' preserves dignity and control, providing the safety required to be honest.",
      "The 'Niceness Ruse' is poison: Polite acquiescence and smiling 'yeses' are used to lubricate social interactions, but in negotiation, they hide true objections. 'No' is authentic; it draws boundaries and defines real preferences.",
      "'Is now a bad time to talk?' beats 'Do you have a few minutes?': Asking 'Do you have a few minutes?' demands a commitment that invites rejection. Asking 'Is now a bad time?' gives the counterpart the power to say 'No, it's fine, go ahead.'",
      "The one-line email resurrection: When someone ghosts you, don't follow up with needy reminders. Ask a 'No'-oriented loss-aversion question: 'Have you given up on this project?'"
    ],
    "coreMechanics": [
      "The Three Types of 'Yes': 1) Counterfeit: A polite escape hatch to end the conversation without commitment. 2) Confirmation: A factual acknowledgment without intent to act. 3) Commitment: A true, binding agreement with real intent to execute.",
      "'No' as the Start, Not the End: 'No' does not mean 'never'; it means 'I am uncomfortable,' 'I need more information,' or 'I feel out of control.'"
    ],
    "keyExercises": [
      "'No'-Oriented Rephrasing: Instead of 'Is this a good idea?' ask 'Is this a ridiculous idea?'. Instead of 'Do you agree?' ask 'Are you against this proposal?'. Instead of 'Can we meet on Tuesday?' ask 'Would it be impossible to meet on Tuesday?'.",
      "The Ghost-Buster Email: Send a subject line and body containing only: 'Have you given up on this project?'"
    ],
    "keyTakeaway": "'No' is not failure—it is the foundational boundary that makes real collaboration safe. Push for 'No' to discover what's genuinely possible."
  },
  {
    "id": "ch5",
    "chapterNumber": 5,
    "title": "Trigger the Two Words That Immediately Transform Any Negotiation: 'That's Right'",
    "bigIdea": "Breakthroughs in negotiation occur not when you persuade someone with facts, but when they feel so profoundly understood that they say 'That's right'—a moment of emotional alignment that unlocks behavioral change.",
    "counterIntuitiveInsights": [
      "'You're right' is a brush-off; 'That's right' is an epiphany: When someone says 'You're right,' they are politely telling you to shut up and go away so you stop bothering them. When they say 'That's right,' they have embraced your framing as their own reality.",
      "Paraphrasing alone is insufficient without emotional labeling: Simple repetition sounds robotic. A genuine summary synthesizes the known facts AND validates the underlying emotions, grievances, and identity of the counterpart.",
      "Unconditional Positive Regard overcomes hostility: In the Dos Palmas kidnapping, Filipino General Yano succeeded in breaking the deadlock with Abu Sayyaf leader Abu Sabaya only after summarizing Sabaya's religious grievances and historical war narrative until Sabaya exclaimed, 'That's right!'",
      "Persuasion requires their permission: You cannot argue anyone into changing their mind. They must convince themselves that the proposed change aligns with their internal worldview."
    ],
    "coreMechanics": [
      "The Anatomy of a Transformative Summary: 1) Paraphrasing: Articulating the objective situation and facts in your own words. 2) Labeling: Identifying and verbalizing the emotions, frustrations, and unspoken values beneath the facts. 3) The Pivot Point: When the counterpart confirms with 'That's right,' their defensiveness evaporates, opening the door to collaborative problem-solving."
    ],
    "keyExercises": [
      "The 'That's Right' Summary Protocol: 1) Listen carefully without interrupting until the counterpart exhausts their complaints. 2) Synthesize using the formula: 'It sounds like [emotion] because [factual context], and what really matters to you is [core value].' 3) Pause and wait for the two magic words: 'That's right.'"
    ],
    "keyTakeaway": "Do not aim for 'Yes' or settle for 'You're right.' Strive relentlessly for 'That's right,' the ultimate signal that your counterpart has bought into the solution."
  },
  {
    "id": "ch6",
    "chapterNumber": 6,
    "title": "Bend Their Reality: How to Shape What Is Fair",
    "bigIdea": "Perception of value is relative, not absolute. By leveraging loss aversion, extreme emotional and numerical anchoring, non-monetary trades, and exposing the manipulative use of the 'F-word' (Fair), you can reshape reality in your favor.",
    "counterIntuitiveInsights": [
      "Compromise is wearing one black shoe and one brown shoe: Splitting the difference is lazy and usually produces an agreement that damages both sides. Meeting halfway is not a virtue; it is an evasion of creative problem solving.",
      "Deadlines are almost always arbitrary and negotiable: Hostage-takers, car dealers, and executives use deadlines to artificially induce panic. Rushing to meet a deadline forces unforced errors. Patience is a weapon.",
      "'Fair' is the most dangerous emotional manipulation in negotiation: The F-word is used to trigger guilt and force concessions. When a counterpart says 'We just want what's fair,' they are implying you are acting unfairly.",
      "People take twice as many risks to avoid a loss as to achieve an equivalent gain: Prospect Theory proves that framing an offer around what the counterpart stands to lose by not acting is twice as motivating as presenting what they will gain."
    ],
    "coreMechanics": [
      "The 3 Uses of the F-Word: 1) The Guilt Trip: 'We just want what's fair.' (Manipulative). 2) The Accusation: 'We've given you a fair offer.' (Hostile). 3) Voss's Collaborative Anchor: 'I want you to feel that you are being treated fairly at all times. Stop me if you ever feel otherwise.' (Constructive).",
      "Reality-Bending Levers: Emotional Anchoring (priming with a scary preamble); Range Anchoring (quoting a range where your goal is the floor); Non-Monetary Pivots (trading low-cost, high-perceived-value concessions)."
    ],
    "keyExercises": [
      "The F-Word Deflection Script: When accused with 'We just want what's fair,' do not apologize or concede. Calmly reply with DJ voice: 'I apologize. Let's stop everything right now, go back to where I started treating you unfairly, and we'll fix it.'",
      "The Range Anchoring Drill: When negotiating compensation, quote a range based on external market data where your true goal is the floor: 'At top firms, people in this position receive between $140,000 and $180,000.'"
    ],
    "keyTakeaway": "Value is never fixed. Anchor emotions before numbers, expose the 'fairness' trap, and harness loss aversion to bend reality without splitting the difference."
  },
  {
    "id": "ch7",
    "chapterNumber": 7,
    "title": "Create the Illusion of Control: How to Calibrate Questions to Transform Conflict into Collaboration",
    "bigIdea": "True control belongs to the listener, not the speaker. By using calibrated 'How' and 'What' questions, you disarm aggression, give the counterpart the illusion of control, and force them to expend mental energy solving your problems.",
    "counterIntuitiveInsights": [
      "Talking gives away power; listening commands it: The person speaking reveals information, desires, and constraints. The trained listener guides the conversation and harnesses the speaker’s energy like judo.",
      "'Why' is universally accusatory: In almost every language and culture, asking 'Why did you do that?' puts people on the defensive and triggers justification. Replace 'Why' with 'What' or 'How' ('What caused you to take that approach?'). The only exception is when you want the counterpart to defend you ('Why would you choose our firm over the cheaper option?').",
      "'How am I supposed to do that?' is the ultimate gentle 'No': Saying direct 'No' provokes confrontation. Asking 'How am I supposed to do that?' invites the counterpart to look at your constraints and come up with a realistic solution.",
      "Self-control precedes situational control: If you react emotionally to an attack, you forfeit control. When provoked, bite your tongue, take a breath, and fire back a calibrated question."
    ],
    "coreMechanics": [
      "Calibrated Questions Architecture: Open-ended queries beginning with 'What' or 'How' that cannot be answered with a simple 'Yes' or 'No'.",
      "Problem-Reversal Mechanism: Framing your bottleneck as their puzzle: 'What about this proposal works for you, and how can we address the delivery timeline?'",
      "Emotional Regulation: Transforming hostage taker demands into collaborative planning: Ecuadorian kidnapping of Garcia, where Voss repeatedly asked 'How can we raise that kind of cash?'"
    ],
    "keyExercises": [
      "The Core Calibrated Question Toolkit: 'How am I supposed to do that?', 'What is the biggest challenge you face here?', 'What are we trying to accomplish?', 'How does this fit into what the objective is?', 'What happens if you do nothing?'"
    ],
    "keyTakeaway": "Do not push back against an aggressive counterpart. Ask calibrated 'What' and 'How' questions to let them burn their energy finding a way to satisfy your constraints."
  },
  {
    "id": "ch8",
    "chapterNumber": 8,
    "title": "Guarantee Execution: How to Spot the Liars and Ensure Follow-Through from Everyone Else",
    "bigIdea": "A deal is worthless if it cannot be executed. Securing implementation requires reading nonverbal incongruence, testing commitment with the Rule of Three, uncovering hidden behind-the-table decision-makers, and neutralizing liars.",
    "counterIntuitiveInsights": [
      "'Yes' is nothing without 'How': Negotiators celebrate signatures and handshake agreements, but true failure occurs post-agreement during implementation. If you haven't negotiated the mechanics of execution, you have no deal.",
      "The 7-38-55 Rule: Albert Mehrabian's research shows that when communicating feelings and attitudes, only 7% of emotional meaning comes from the spoken words, 38% from tone of voice, and 55% from body language. If the tone or posture clashes with the words, believe the nonverbals.",
      "Liars work harder and use more words (The Pinocchio Effect): Deceptive people use more complex sentences, tell longer stories, and overuse third-person pronouns ('they', 'him', 'it') to create psychological distance from the lie.",
      "Pronoun hierarchy reveals real power: Decision-makers with genuine authority use plural pronouns ('we', 'our team', 'they') to keep their options open and avoid being cornered. Imposters and low-level negotiators overuse singular pronouns ('I', 'me', 'my') to appear important.",
      "The deal-killers are rarely in the room: Every negotiation has stakeholders behind the scenes who can veto implementation. If you do not actively influence the people behind the table, your agreement will collapse."
    ],
    "coreMechanics": [
      "The Rule of Three: Securing commitment by having the counterpart reaffirm agreement three times across the conversation using different tools (a calibrated question, a label, and a summary).",
      "The Chris Rule (Humanizing Yourself): Using your first name to disrupt dehumanized bargaining ('I'm Chris; what happens to me if we agree to this?').",
      "The 7-38-55 Incongruence Check: Immediately labeling nonverbal hesitation ('I noticed your voice hesitated when you said yes. It sounds like there's an unresolved issue?')."
    ],
    "keyExercises": [
      "Uncovering Behind-the-Table Deal Killers: 'How does this affect the rest of your team?', 'How on board are the people not in this meeting?', 'What do your colleagues see as the main challenge to implementing this?'",
      "The Multi-Stage 'No' via 'How': Step 1: 'How am I supposed to do that?' Step 2: 'Your offer is generous, but how am I on board with that?' Step 3: 'I'm sorry, that just doesn't work for me.'"
    ],
    "keyTakeaway": "Agreement is cheap; execution is everything. Align nonverbals, uncover the hidden veto players behind the table, and test commitment three times before declaring victory."
  },
  {
    "id": "ch9",
    "chapterNumber": 9,
    "title": "Bargain Hard: How to Get Your Price",
    "bigIdea": "When bargaining brass tacks, identify your counterpart’s behavioral type (Accommodator, Assertive, Analyst) and execute the Ackerman Model—a psychological system of diminishing raises, non-round numbers, and non-monetary pivots.",
    "counterIntuitiveInsights": [
      "Conflict is the path to great deals: Bargaining is uncomfortable for most people, but top negotiators lean into conflict with good humor. Conflict exposes truth, tests limits, and produces creative solutions.",
      "Precise non-round numbers carry enormous psychological weight: Ending an offer on an exact number ($37,543 instead of $37,500 or $38,000) signals to the counterpart that you have calculated down to the penny and are at your absolute financial ceiling.",
      "The three negotiator types talk past each other: An Assertive negotiator sees time as money and values winning; an Analyst values precision, facts, and silence; an Accommodator values relationship, rapport, and smooth interactions. Treating an Analyst like an Accommodator will destroy the deal.",
      "Anger damages communication unless it is strategic: Uncontrolled anger triggers adrenaline, shuts down System 2 logic, and invites retaliation. Expressing controlled, labeled frustration ('It seems like you don't value our time') preserves authority without provoking war."
    ],
    "coreMechanics": [
      "The 3 Negotiator Archetypes: 1) Analyst: Methodical, prepared, skeptical, silence-loving. (Do not rush; use data). 2) Accommodator: Relationship-oriented, conversational, harmony-seeking. (Watch for counterfeit yes; use calibrated questions). 3) Assertive: Aggressive, direct, time-sensitive, ego-driven. (Use mirrors; let them talk; never attack their ego).",
      "The Ackerman Model (Mike Ackerman, former CIA): 1) Set your target price (100%). 2) Set your extreme opening offer at 65% of your target. 3) Calculate three raises of diminishing increments: 85% (+20%), 95% (+10%), and 100% (+5%). 4) Use labels and calibrated questions to resist concessions between offers. 5) Make your final number non-round and specific down to the dollar. 6) Throw in a non-monetary concession with your final number to show you are tapped out."
    ],
    "keyExercises": [
      "The Ackerman Calculation Worksheet: Target: $100,000. Offer 1 (65%): $65,000. Offer 2 (85%): $85,000. Offer 3 (95%): $95,000. Final Offer (100%): $100,230 (exact, non-round) + non-monetary perk (e.g., free delivery).",
      "Type-Matching Protocol: Identify whether your counterpart is an Analyst, Accommodator, or Assertive within the first 5 minutes and mirror their pacing and communication preferences."
    ],
    "keyTakeaway": "Master the Ackerman Model: anchor low, concede in diminishing increments, close with an exact non-round number, and adapt your style to the counterpart's archetype."
  },
  {
    "id": "ch10",
    "chapterNumber": 10,
    "title": "Find the Black Swan: How to Create Breakthroughs by Revealing the Unknown Unknowns",
    "bigIdea": "In every negotiation, there are 3 to 5 hidden pieces of information—Black Swans—that, if uncovered, completely shatter the paradigm and create massive leverage.",
    "counterIntuitiveInsights": [
      "'Crazy' people are almost never crazy: When a counterpart appears irrational or suicidal in their demands, they are almost always constrained by hidden pressures, acting on bad information, or pursuing subterranean desires you haven't identified.",
      "What you don't know is what makes the deal: Traditional preparation focuses on known facts and anticipated objections. But real breakthroughs come from finding the 'unknown unknowns'—information the counterpart may not even know is valuable.",
      "Deadlines can be lethal illusions: In the Griffin bank hostage standoff, police assumed hostage takers never kill on deadline. Griffin, however, was suicidal and deliberately seeking death by cop at 3:00 PM. Knowing his hidden 'religion' / worldview was the only thing that could have changed the outcome.",
      "Ten minutes of face time beats weeks of email: Nonverbal cues, unguarded banter before a meeting starts, or how someone treats a waiter reveal Black Swans that formal presentations hide."
    ],
    "coreMechanics": [
      "The 3 Knowledge Categories: 1) Known Knowns: Established facts (prices, specs). 2) Known Unknowns: Questions you know to ask (their budget, competing bids). 3) Unknown Unknowns (Black Swans): Unforeseen hidden dynamics (internal politics, personal vendettas, hidden deadlines).",
      "The 3 Types of Leverage: 1) Positive Leverage: Ability to provide what they want. 2) Negative Leverage: Ability to inflict pain or trigger loss aversion. 3) Normative Leverage: Using the counterpart’s own rules, standards, religious or moral beliefs, or stated corporate policies against them.",
      "The Similarity Principle: People are more likely to concede to someone with whom they share cultural, religious, or personal common ground."
    ],
    "keyExercises": [
      "The Black Swan Mining Protocol: 1) Check for constraints: Ask 'What happens if this doesn't go through?'. 2) Observe unguarded moments: Watch how the counterpart behaves before the meeting starts and as people pack up. 3) Leverage multiple listeners: Have a designated team member whose sole job is to listen between the lines, not talk."
    ],
    "keyTakeaway": "Never dismiss a counterpart as crazy. Uncover their hidden constraints, dig for their personal 'religion,' and locate the Black Swans that multiply your leverage."
  },
  {
    "id": "appendix",
    "chapterNumber": 11,
    "title": "Appendix: Prepare a Negotiation One Sheet",
    "bigIdea": "Preparation is not about scripting rigid dialogue; it is about building a psychological map—a concise, 5-section 'One Sheet' of goals, situation summaries, accusation audits, calibrated questions, and non-cash trades.",
    "counterIntuitiveInsights": [
      "BATNA fixates you on aiming low: Fisher and Ury’s BATNA (Best Alternative to a Negotiated Agreement) creates a 'wimp-win' mindset. Under stress, human focus gravitates to the BATNA, causing negotiators to mentally concede everything above their bottom line.",
      "Scripting dialogue is a fool's errand: You cannot anticipate the twists and turns of real conversation. Trying to follow a rigid script blinds you to unexpected information and leaves you helpless when the counterpart goes off-script.",
      "Initial preparation yields a 7:1 return: Every hour spent preparing a disciplined One Sheet saves seven hours of renegotiating botched deals, clarifying misunderstandings, and managing failed implementations.",
      "Focus on subterranean motivations over stated positions: Stated positions are what people demand; motivations are why they want it (self-esteem, fear of looking bad, autonomy)."
    ],
    "coreMechanics": [
      "The 5 Sections of the Negotiation One Sheet: 1) Section I: The Goal (Think through best/worst case, but write down only the ambitious, specific best-case goal). 2) Section II: Summary (A 1-2 paragraph factual narrative designed to trigger 'That's right'). 3) Section III: Labels / Accusation Audit (3-5 prepared labels targeting negative dynamics and fears). 4) Section IV: Calibrated Questions (3-5 'What' and 'How' questions targeting deal-killers and behind-the-table influencers). 5) Section V: Non-Cash Offers (A list of high-value, low-cost non-monetary items to trade)."
    ],
    "keyExercises": [
      "The 1-Page Preparation Template: Goal: [Specific, ambitious, flexible target]. Summary: [Factual background framing]. Accusation Audit: ['It seems like you feel...', 'It seems like you're worried that...']. Calibrated Questions: ['What are we up against here?', 'How does this affect your team?']. Non-Cash Trades: ['What can they give that would make us do this for free?']"
    ],
    "keyTakeaway": "Do not enter a negotiation with a rigid script or a wimp-win BATNA. Arm yourself with a 5-section One Sheet that gives you psychological clarity and tactical agility."
  }
];

const DEFAULT_NEVER_SPLIT_QUESTIONS = [
  {
    "id": "nsv-q01",
    "chapterId": "ch1",
    "chapterName": "Ch 1: The New Rules & System 1 Psychology",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why did traditional negotiation theory (such as Roger Fisher and William Ury's Getting to Yes) fail to predict or resolve high-stakes crises like hostage standoffs, according to Chris Voss and behavioral economics?",
    "options": [
      "Traditional theory did not emphasize the importance of BATNA (Best Alternative to a Negotiated Agreement) enough.",
      "Traditional theory assumed humans are rational actors seeking mutual interest via System 2 deliberation, ignoring that human behavior is primarily driven by unconscious, emotional System 1 cognitive biases.",
      "Traditional theory relied too heavily on mathematical game theory models with zero-sum outcomes.",
      "Traditional theory focused exclusively on corporate mergers rather than interpersonal disputes."
    ],
    "correctAnswer": 1,
    "explanation": "Traditional negotiation theory developed at Harvard assumed that parties are rational problem solvers operating under System 2 logic ('separate the people from the problem'). However, Daniel Kahneman and Amos Tversky proved that humans are deeply irrational, governed by System 1 cognitive biases and animal instincts. High-stakes negotiations cannot succeed by ignoring emotion; they must influence the System 1 feelings that feed System 2 rationalizations.",
    "citation": "Chapter 1: The New Rules - Heart vs. Mind"
  },
  {
    "id": "nsv-q02",
    "chapterId": "ch1",
    "chapterName": "Ch 1: The New Rules & System 1 Psychology",
    "difficulty": "medium",
    "type": "concept",
    "question": "What major historical crises led the FBI to abandon traditional command-and-control hostage negotiation tactics in favor of emotional intelligence and active listening?",
    "options": [
      "The 2001 World Trade Center attacks and the Dos Palmas kidnapping.",
      "The Iran hostage crisis of 1979 and the Pan Am 103 bombing.",
      "The 1962 Cuban Missile Crisis and the Watergate break-in.",
      "The 1971 Attica prison riots, the 1972 Munich Olympics massacre, and disastrous sieges at Ruby Ridge (1992) and Waco (1993)."
    ],
    "correctAnswer": 3,
    "explanation": "Modern hostage negotiation originated after the fatal 1971 Attica prison riots and the 1972 Munich Olympic Games disaster (where 11 Israeli athletes died). Decades later, fatal sieges at Ruby Ridge (1992) and Waco (1993) prompted Deputy Attorney General Philip B. Heymann to order a comprehensive overhaul of FBI techniques, moving away from zero-sum military tactics toward therapeutic crisis negotiation and emotional de-escalation.",
    "citation": "Chapter 1: The New Rules - The New Rules"
  },
  {
    "id": "nsv-q03",
    "chapterId": "ch1",
    "chapterName": "Ch 1: The New Rules & System 1 Psychology",
    "difficulty": "medium",
    "type": "scenario",
    "question": "During an executive negotiation course at Harvard, law professors Robert Mnookin and Gabriella Blum staged a mock kidnapping of Chris Voss's son, demanding $1 million within 24 hours. How did Voss neutralize their aggressive bargaining without conceding or offering a counter-number?",
    "options": [
      "He offered a calculated compromise of $500,000 using the Ackerman bargaining model.",
      "He walked out of the room to demonstrate that he had a strong BATNA.",
      "He used calm pacing and repeatedly asked calibrated open-ended questions: 'How am I supposed to do that?'",
      "He cited international law and threatened to bring in FBI SWAT teams."
    ],
    "correctAnswer": 2,
    "explanation": "Voss repeatedly asked 'How am I supposed to do that?' with calm poise. This open-ended calibrated question stopped the Harvard professors in their tracks because it forced them to confront his constraints and invent solutions to his problem. It showed that calibrated questions can disarm even the most seasoned, legally trained negotiators without ever saying 'No' or naming a counter-price.",
    "citation": "Chapter 1: The New Rules - An FBI Negotiator at Harvard"
  },
  {
    "id": "nsv-q04",
    "chapterId": "ch1",
    "chapterName": "Ch 1: The New Rules & System 1 Psychology",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to Daniel Kahneman\u2019s dual-system framework described in Thinking, Fast and Slow, how do System 1 and System 2 interact during a negotiation?",
    "options": [
      "System 1 and System 2 operate completely independently and never influence one another.",
      "System 1 is fast, emotional, and instinctive; its inchoate impressions and feelings are the spring that feeds the deliberate choices and rationalizations of System 2.",
      "System 2 makes all the rapid subconscious choices, while System 1 verifies them with deliberate logic.",
      "System 1 only activates during extreme physical trauma, whereas System 2 governs 99% of verbal negotiations."
    ],
    "correctAnswer": 1,
    "explanation": "System 1 is our animal mind\u2014fast, emotional, automatic, and subconscious. System 2 is slow, deliberate, and effortful. Kahneman demonstrated that System 1's feelings and impressions are the wellspring that feeds the explicit choices of System 2. If you know how to influence your counterpart's System 1 emotional underpinnings through tone and framing, you guide how their System 2 rationalizes the outcome.",
    "citation": "Chapter 1: The New Rules - Heart vs. Mind"
  },
  {
    "id": "nsv-q05",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is 'mirroring' (isopraxism) in Chris Voss\u2019s negotiation framework, and how does it function psychologically?",
    "options": [
      "Repeating the last three words (or selected 1 to 3 critical words) of what the counterpart said with an inquisitive, upward-inflected tone.",
      "Summarizing their entire speech into a 30-second bulleted monologue.",
      "Reflecting back their exact emotional insults with equal aggression.",
      "Crossing your arms or leaning back whenever the counterpart does so, mimicking their body posture."
    ],
    "correctAnswer": 0,
    "explanation": "In the Black Swan framework, mirroring is not physical mimicry; it is repeating the last 1 to 3 words or key terms of what someone has just said. Because humans fear what is different and are drawn to what is similar, mirroring signals subconscious safety and rapport, compelling the counterpart to elaborate and clarify without feeling interrogated.",
    "citation": "Chapter 2: Be a Mirror - Mirroring"
  },
  {
    "id": "nsv-q06",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "During the 1993 Chase Manhattan bank robbery in Brooklyn, bank robber Chris Watts was barricaded inside with hostages and volatile weapons. What vocal technique did Chris Voss use on the phone to stabilize Watts's emotional state?",
    "options": [
      "A sharp, commanding voice ordering Watts to put down his weapons immediately.",
      "A completely monotone computerized voice designed to conceal all human vulnerability.",
      "The 'Late-Night FM DJ voice'\u2014a calm, slow, deep, downward-inflecting tone that communicates steady authority.",
      "A rapid, high-energy tone to show responsiveness and excitement."
    ],
    "correctAnswer": 2,
    "explanation": "Voss employed the Late-Night FM DJ voice: slow, calm, and downward-inflecting. By inflecting downward rather than upward (which sounds like an uncertain question), you convey total control and calm reassurance. This lowers the counterpart's heart rate and triggers mirror neurons to match your calm cadence.",
    "citation": "Chapter 2: Be a Mirror - The Voice"
  },
  {
    "id": "nsv-q07",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "easy",
    "type": "concept",
    "question": "What are the three voice tones identified by Chris Voss, and what proportion of a negotiation should be conducted in your default voice?",
    "options": [
      "Authoritative, Submissive, and Inquisitive; Authoritative should be used 90% of the time.",
      "Late-Night FM DJ, Positive/Playful, and Direct/Assertive; Positive/Playful should be the default for roughly 80% or more of the time.",
      "Monotone, Emotional, and Shouting; Monotone should be used 100% of the time.",
      "Logical, Empathetic, and Aggressive; Aggressive should be used at least 50% of the time to maintain dominance."
    ],
    "correctAnswer": 1,
    "explanation": "The three voice tones are: 1) Late-Night FM DJ (calm, authoritative, downward-inflecting; used selectively), 2) Positive/Playful (good-natured, light, smiling; default for 80%+ of negotiations), and 3) Direct/Assertive (blunt, aggressive; causes pushback and should be used rarely or never).",
    "citation": "Chapter 2: Be a Mirror - The Voice"
  },
  {
    "id": "nsv-q08",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "Your boss storms into your office and snaps: 'We cannot approve this budget because the client\u2019s software integration is totally unworkable!' What is the correct 4-step sequence to mirror her statement according to Voss?",
    "options": [
      "Use the FM DJ voice, say 'I'm sorry, totally unworkable?', and then remain completely silent for at least 4 seconds.",
      "Say 'I hear you,' and counter-offer by asking for 10% less budget.",
      "Immediately reply: 'I disagree that it is unworkable, let me show you the test results.'",
      "Smile, say 'You think it is unworkable?', and immediately explain three reasons why the client is mistaken."
    ],
    "correctAnswer": 0,
    "explanation": "The 4-step mirroring routine is: 1) Adopt the Late-Night FM DJ or playful voice; 2) Start with an apology ('I'm sorry...'); 3) Mirror the critical 1-3 words with an inquisitive inflection ('...totally unworkable?'); 4) Maintain Dynamic Silence (at least 4 seconds) to let the counterpart expand and explain their underlying reasoning.",
    "citation": "Chapter 2: Be a Mirror - How to Confront\u2014and Get Your Way\u2014Without Confrontation"
  },
  {
    "id": "nsv-q09",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does 'Tactical Empathy' differ fundamentally from ordinary empathy, sympathy, or compassion?",
    "options": [
      "Tactical empathy requires agreeing with the other person\u2019s morals and adopting their value system.",
      "Tactical empathy is used exclusively to fake emotional warmth while secretly manipulating legal contracts.",
      "Tactical empathy is emotional intelligence weaponized: recognizing, verbalizing, and understanding the counterpart's perspective and feelings to gather intelligence and influence outcomes, without agreeing with them.",
      "Tactical empathy involves sympathizing with the victim while expressing open disdain for the kidnapper."
    ],
    "correctAnswer": 2,
    "explanation": "Tactical empathy does not mean being nice, soft, or agreeing with your counterpart. It is the ability to recognize their perspective, vocalize their emotional state, and understand their subterranean motivations to build rapport and dismantle barriers to agreement.",
    "citation": "Chapter 3: Don't Feel Their Pain, Label It - Tactical Empathy"
  },
  {
    "id": "nsv-q10",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to brain imaging studies conducted by Matthew Lieberman at UCLA cited by Voss, what happens in the human brain when negative emotions are accurately labeled?",
    "options": [
      "The brain's hippocampus is suppressed, causing the person to forget prior grievances.",
      "The sympathetic nervous system doubles adrenaline secretion to prepare for fight-or-flight.",
      "The brain produces intense dopamine spikes, creating immediate euphoria.",
      "The amygdala, which governs fear and threat responses, experiences deactivated arousal, shifting cognitive activity to the prefrontal cortex."
    ],
    "correctAnswer": 3,
    "explanation": "Lieberman's fMRI studies revealed that labeling an emotion disrupts activity in the amygdala (the brain's fear and emotional hub) and engages the rational prefrontal cortex. Naming a negative emotion diminishes its physiological intensity, allowing calm problem-solving to resume.",
    "citation": "Chapter 3: Don't Feel Their Pain, Label It - Labeling"
  },
  {
    "id": "nsv-q11",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Chris Voss strictly instruct negotiators to start labels with 'It seems like...', 'It looks like...', or 'It sounds like...', and NEVER with 'I hear that...' or 'What I'm hearing is...'?",
    "options": [
      "Because 'It' activates the counterpart's acoustic memory more rapidly than 'I'.",
      "Because using the word 'I' immediately centers the conversation on you, signaling ego and inviting the counterpart to argue ('No, you don't hear me!'), whereas neutral phrases keep the focus entirely on them.",
      "Because FBI policy forbids agents from using first-person pronouns in all official hostage logs.",
      "Because labels starting with 'It' sound more grammatically formal in legal depositions."
    ],
    "correctAnswer": 1,
    "explanation": "When you say 'I hear that you're upset,' the word 'I' triggers defensiveness because the counterpart feels you are claiming insight into their head, tempting them to snap back: 'You have no idea what I feel!' In contrast, 'It seems like...' is neutral, non-presumptive, and invites them to either validate or clarify without conflict.",
    "citation": "Chapter 3: Don't Feel Their Pain, Label It - Labeling"
  },
  {
    "id": "nsv-q12",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "You are an architect who is three weeks late on a major client milestone and over budget. Before the angry client can speak, you initiate an 'Accusation Audit.' Which opening statement best demonstrates this technique?",
    "options": [
      "'It seems like you should have given us more realistic deadlines if you wanted quality work.'",
      "'We have good news and bad news; let's focus on the good news first.'",
      "'Before we get started, I know you probably think we are disorganized, disrespectful of your timeline, untrustworthy, and completely taking advantage of your patience.'",
      "'I apologize for the delay, but the city permit office was completely incompetent and held up the blueprints.'"
    ],
    "correctAnswer": 2,
    "explanation": "An Accusation Audit involves proactively listing all the worst accusations, complaints, and negative feelings the other side could level against you before they have a chance to voice them. When spoken aloud, the accusations sound exaggerated, diffusing the client's anger and prompting them to say: 'Well, I wouldn't go that far, but we need a solution.'",
    "citation": "Chapter 3: Don't Feel Their Pain, Label It - Clear the Road Before Advertising the Destination"
  },
  {
    "id": "nsv-q13",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' \u2014 Master 'No'",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are the three distinct types of 'Yes' identified by Chris Voss, and why is pursuing 'Yes' so dangerous for amateur negotiators?",
    "options": [
      "Initial, Interim, and Ultimate; pursuing 'Yes' takes too long to negotiate.",
      "Counterfeit, Confirmation, and Commitment; pushing for 'Yes' triggers defensiveness and usually produces a 'counterfeit yes' designed to escape the interaction.",
      "Legal, Moral, and Financial; pursuing 'Yes' causes legal liability.",
      "Passive, Active, and Aggressive; pushing for 'Yes' makes the negotiator look submissive."
    ],
    "correctAnswer": 1,
    "explanation": "The three types of 'Yes' are: 1) Counterfeit (a fake yes to appease or escape), 2) Confirmation (a neutral factual affirmation), and 3) Commitment (a true, binding agreement). Traditional sales tactics that push for 'Yes' momentum trigger deep suspicion; people give a counterfeit 'yes' just to get away without intending to execute.",
    "citation": "Chapter 4: Beware \u201cYes\u201d\u2014Master \u201cNo\u201d - \u201cYes\u201d Is Great, but \u201cNo\u201d Is Better"
  },
  {
    "id": "nsv-q14",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' \u2014 Master 'No'",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does Chris Voss state that negotiation only truly begins once the counterpart has said 'No'?",
    "options": [
      "Because 'No' triggers an automatic penalty clause in federal negotiation protocols.",
      "Because a negotiator must always reject the first three offers as a rule of thumb.",
      "Because saying 'No' provides the counterpart with a sense of safety, protection, and autonomy, allowing them to lower their defenses and define what they actually want.",
      "Because saying 'No' exhausts the counterpart's stamina and forces them to surrender."
    ],
    "correctAnswer": 2,
    "explanation": "Saying 'No' preserves the speaker's autonomy and dignity. It establishes a boundary of safety. When people feel safe saying 'No,' they no longer fear being trapped, enabling them to relax, share real information, and explore genuine terms.",
    "citation": "Chapter 4: Beware \u201cYes\u201d\u2014Master \u201cNo\u201d - \u201cNo\u201d Starts the Negotiation"
  },
  {
    "id": "nsv-q15",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' \u2014 Master 'No'",
    "difficulty": "easy",
    "type": "scenario",
    "question": "When cold-calling a prospective client or calling a busy executive, why is 'Is now a bad time to talk?' vastly superior to 'Do you have a few minutes to talk?'",
    "options": [
      "Because asking if it's a bad time confuses the prospect and causes them to pause.",
      "Because 'Do you have a few minutes?' asks for a commitment that threatens their time and invites a defensive 'I'm busy,' whereas 'Is now a bad time?' allows them to say 'No,' which feels safe and gives them permission to listen.",
      "Because corporate telephone switchboards filter out positive questions.",
      "Because executives only respond to negative psychological reverse engineering."
    ],
    "correctAnswer": 1,
    "explanation": "'Do you have a few minutes?' feels like a trap where answering 'Yes' surrenders control. Asking 'Is now a bad time to talk?' invites the counterpart to say 'No (it's not a bad time),' which asserts their control and grants you their undivided attention.",
    "citation": "Chapter 4: Beware \u201cYes\u201d\u2014Master \u201cNo\u201d - The Persuasive Power of \u201cNo\u201d"
  },
  {
    "id": "nsv-q16",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' \u2014 Master 'No'",
    "difficulty": "medium",
    "type": "scenario",
    "question": "A promising business partner has abruptly stopped answering your phone calls and emails for two weeks. According to Voss, what one-sentence email should you send to revive the deal?",
    "options": [
      "'Are you still interested in working with us?'",
      "'Just wanted to check in and see if you had any updates on our proposal?'",
      "'If you don't respond by Friday, we will be forced to withdraw our offer.'",
      "'Have you given up on this project?'"
    ],
    "correctAnswer": 3,
    "explanation": "'Have you given up on this project?' triggers loss aversion and the desire for autonomy. Nobody likes to admit that they quit or gave up. Because it is a 'No'-oriented question, the recipient can comfortably reply: 'No, we haven't given up, sorry for the delay, we were just dealing with an internal audit...'",
    "citation": "Chapter 4: Beware \u201cYes\u201d\u2014Master \u201cNo\u201d - The 1-Line Email"
  },
  {
    "id": "nsv-q17",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Trigger 'That's Right' (Summaries)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why is hearing 'You're right' during a negotiation a warning sign, while hearing 'That's right' is a transformative breakthrough?",
    "options": [
      "'You're right' is a socially polite brush-off designed to make you stop talking, whereas 'That's right' signifies that the counterpart feels deeply understood and has embraced your summary as their own truth.",
      "There is no difference; both phrases indicate total capitulation.",
      "'That's right' is only used by analysts, whereas 'You're right' is used by assertive bargainers.",
      "'You're right' creates a legally binding admission of guilt that courts reject."
    ],
    "correctAnswer": 0,
    "explanation": "When someone tells you 'You're right,' they are waving you away so you stop bothering them. But when you summarize their world and feelings so accurately that they say 'That's right,' their ego steps aside and they feel unconditionally affirmed, opening the gateway to persuasion and behavioral change.",
    "citation": "Chapter 5: Trigger the Two Words That Immediately Transform Any Negotiation - 'That\u2019s Right'"
  },
  {
    "id": "nsv-q18",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Trigger 'That's Right' (Summaries)",
    "difficulty": "hard",
    "type": "concept",
    "question": "What are the two foundational building blocks required to craft an effective negotiation 'Summary' that triggers 'That's right'?",
    "options": [
      "Paraphrasing (re-articulating the objective facts) combined with Labeling (identifying and validating the counterpart's underlying emotions and worldview).",
      "An apology for past errors followed by a calibrated 'Why' question.",
      "A firm financial anchor combined with an aggressive deadline.",
      "A list of contractual deliverables followed by a BATNA assessment."
    ],
    "correctAnswer": 0,
    "explanation": "A true Black Swan summary has two components: 1) Paraphrasing the objective situation and facts in your own words, and 2) Labeling the emotions, unspoken fears, and values behind those facts ('the world according to them'). When done right, the counterpart cannot help but say 'That's right.'",
    "citation": "Chapter 5: Trigger the Two Words That Immediately Transform Any Negotiation - The Summary"
  },
  {
    "id": "nsv-q19",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Trigger 'That's Right' (Summaries)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In the 2000 Dos Palmas kidnapping in the Philippines, terrorist leader Abu Sabaya of Abu Sayyaf held American hostage Jeffrey Schilling. How did Philippine military negotiator General Yano break through Sabaya's hostile rhetoric?",
    "options": [
      "He used aggressive sarcasm to prove to Sabaya that his demands were illegal under Islamic law.",
      "He deployed an electronic jamming device to cut off Sabaya's radio broadcasts.",
      "He repeatedly summarized Sabaya\u2019s religious grievances and historical narrative of Muslim oppression until Sabaya exclaimed 'That's right!', transforming the dialogue from threats to workable logistics.",
      "He offered a ransom of $10 million disguised as humanitarian food aid."
    ],
    "correctAnswer": 2,
    "explanation": "Coached by Voss, General Yano stopped arguing about politics or hostages. Instead, Yano listened to Sabaya's lengthy rants and then delivered a comprehensive summary of Sabaya's worldview, Muslim grievances against colonial powers, and personal frustrations. Sabaya finally blurted out 'That's right!' Once Sabaya felt heard, his hostility collapsed and practical negotiations began.",
    "citation": "Chapter 5: Trigger the Two Words That Immediately Transform Any Negotiation - The Dos Palmas Kidnapping"
  },
  {
    "id": "nsv-q20",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does Daniel Kahneman and Amos Tversky\u2019s 'Prospect Theory' and the concept of 'Loss Aversion' dictate how deals should be framed?",
    "options": [
      "People are strictly motivated by maximizing mathematical expected utility.",
      "People experience roughly twice as much psychological pain from a loss as they do pleasure from an equivalent gain; therefore, framing an offer around what they stand to lose by not agreeing is far more persuasive than showing what they will gain.",
      "Negotiators should always take high-risk gambles when they are already winning.",
      "Loss aversion only affects retail consumers buying consumer electronics, not B2B executives."
    ],
    "correctAnswer": 1,
    "explanation": "Prospect Theory established that humans are loss-averse: the pain of losing $10,000 is twice as intense as the joy of gaining $10,000. In negotiation, framing inaction as a tangible loss ('If we don't complete this integration by Q3, your division risks losing $200,000 in redundant licensing fees') bends reality far more effectively than touting future gains.",
    "citation": "Chapter 6: Bend Their Reality - Don\u2019t Compromise / Loss Aversion"
  },
  {
    "id": "nsv-q21",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "easy",
    "type": "concept",
    "question": "Why does Chris Voss declare that 'Splitting the difference is wearing one black shoe and one brown shoe'?",
    "options": [
      "Because meeting halfway often leads to an unworkable compromise that satisfies neither party's genuine needs while creating a bad agreement.",
      "Because compromise is mathematically impossible in financial contracts.",
      "Because splitting the difference always favors the buyer over the seller.",
      "Because hostage negotiators are legally required to dress in matching uniform footwear."
    ],
    "correctAnswer": 0,
    "explanation": "Voss argues that splitting the difference is lazy, fear-driven bargaining. If a husband wants to wear black shoes and his wife wants him to wear brown shoes, wearing one black shoe and one brown shoe is a compromise that looks ridiculous and helps nobody. Great negotiators push past compromise to uncover creative, reality-bending solutions.",
    "citation": "Chapter 6: Bend Their Reality - Don\u2019t Compromise"
  },
  {
    "id": "nsv-q22",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In a heated contract dispute, your counterpart leans across the table and snaps: 'We just want what's fair!' According to Voss, what is happening psychologically and how should you respond?",
    "options": [
      "They are offering a 50/50 split; you should accept immediately to build trust.",
      "You should counter by shouting that their previous contract was unfair to prove mutual guilt.",
      "They are referring to the Federal Arbitration Insurance Regulations; you should consult a lawyer.",
      "They are using the 'F-word' as an emotional manipulation weapon to make you feel guilty and induce concessions; you should calmly reply: 'I apologize. Let's stop everything and go back to where I started treating you unfairly, and we'll fix it.'"
    ],
    "correctAnswer": 3,
    "explanation": "'Fair' is the most abused emotional manipulation in negotiations, designed to knock you off balance. By apologizing in DJ voice and asking them to point out exactly where unfairness occurred, you neutralize the emotional accusation and force them to substantiate their claims with objective facts.",
    "citation": "Chapter 6: Bend Their Reality - The F-Word: Why It\u2019s So Powerful, How to Use It, and How to Defend Against It"
  },
  {
    "id": "nsv-q23",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "medium",
    "type": "scenario",
    "question": "When negotiating a new salary package, how can you effectively apply 'Range Anchoring' and non-monetary perks to bend reality without appearing greedy?",
    "options": [
      "Quote an external market salary range where your secret target number is at the bottom of the range (e.g., $140,000\u2013$170,000 when you want $140,000), and bundle non-cash terms like executive coaching or flexible remote days.",
      "Tell the hiring manager that you will work for minimum wage if they promise a big bonus.",
      "Refuse to discuss money until after your 90-day probation period.",
      "Demand a single massive round number ($200,000) and refuse to budge."
    ],
    "correctAnswer": 0,
    "explanation": "Research from Columbia Business School cited by Voss shows that quoting a range with your target number at the low end makes you appear reasonable while psychologically anchoring the counterpart high. Furthermore, negotiating non-monetary items (like title, mentorship, or performance reviews) expands the pie without straining cash budgets.",
    "citation": "Chapter 6: Bend Their Reality - How to Negotiate a Better Salary"
  },
  {
    "id": "nsv-q24",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "medium",
    "type": "concept",
    "question": "In any high-stakes conversation, who actually has more control: the person talking or the person listening?",
    "options": [
      "Both have equal control as long as an official mediator is present.",
      "Control depends entirely on who possesses the superior legal BATNA.",
      "The person talking, because they command the microphone and dictate the agenda.",
      "The person listening, because the speaker reveals their thoughts, constraints, and vulnerabilities, while the skilled listener directs the conversational frame through calibrated questions."
    ],
    "correctAnswer": 3,
    "explanation": "Talkers give away information while laboring under the illusion of control. The listener, by using calibrated questions, mirrors, and labels, steers the counterpart toward the listener's objectives while letting the counterpart feel in charge.",
    "citation": "Chapter 7: Create the Illusion of Control - Calibrated Questions"
  },
  {
    "id": "nsv-q25",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does Chris Voss strongly advise against asking questions that begin with 'Why', and what is the one rare strategic exception?",
    "options": [
      "'Why' questions can be answered with a simple 'Yes' or 'No', which ends conversation.",
      "'Why' is grammatically incorrect in negotiation syntax; the exception is in court filings.",
      "'Why' universally sounds accusatory and prompts defensiveness in every language; the rare exception is when you want the counterpart to defend you or your firm ('Why would you choose us over competitors?').",
      "'Why' should only be used when dealing with Assertive personality types."
    ],
    "correctAnswer": 2,
    "explanation": "'Why' almost always feels like an attack ('Why did you do that?'), forcing the person to rationalize their actions defensively. The only time to use 'Why' is when you want them to articulate reasons to favor you, such as asking a prospective client: 'Why would your company ever change from your current vendor to us?'",
    "citation": "Chapter 7: Create the Illusion of Control - Avoid \u201cWhy\u201d"
  },
  {
    "id": "nsv-q26",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "Your vendor insists on a 40% immediate price increase effective tomorrow, claiming supply chain inflation. Which calibrated response uses Voss\u2019s signature gentle 'No' to reverse the burden onto the vendor?",
    "options": [
      "'We will agree to 20%, but absolutely not 40%.'",
      "'Why are you trying to ruin our business relationship?'",
      "'That is completely unreasonable and violates our service contract.'",
      "Delivered with the calm FM DJ voice: 'How am I supposed to do that?'"
    ],
    "correctAnswer": 3,
    "explanation": "'How am I supposed to do that?' is a masterstroke: it says 'No' without ever using the word 'No.' It maintains positive rapport while handing the puzzle back to the vendor, forcing them to contemplate your limitations and devise a realistic compromise.",
    "citation": "Chapter 7: Create the Illusion of Control - Calibrated Questions"
  },
  {
    "id": "nsv-q27",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "During the kidnapping of Ecuadorian businessman Garcia, how did Voss and Garcia's family use calibrated questions to drastically reduce the kidnappers' ransom demand from millions down to a tiny fraction?",
    "options": [
      "They used an aggressive counter-threat to expose the kidnappers to the cartel.",
      "They pretended that Garcia had died of medical complications inside the hideout.",
      "They patiently repeated calibrated 'How' questions ('How can we get that kind of money?') over weeks, prompting the kidnappers to solve the logistical problem and negotiate against themselves.",
      "They tracked the kidnappers' cell towers and coordinated a midnight commando raid."
    ],
    "correctAnswer": 2,
    "explanation": "Instead of countering with numbers or refusing to pay, the family repeatedly asked: 'How can we raise that kind of cash?' This calibrated question treated the kidnappers as partners in a shared logistical dilemma. The kidnappers repeatedly lowered their demands to make it possible for the family to comply.",
    "citation": "Chapter 7: Create the Illusion of Control - The Garcia Kidnapping"
  },
  {
    "id": "nsv-q28",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What does Albert Mehrabian\u2019s 7-38-55 Rule state regarding interpersonal communication in high-stakes or emotional negotiations?",
    "options": [
      "Only 7% of emotional meaning is conveyed by the spoken words, 38% by tone of voice, and 55% by body language and facial expressions.",
      "7% of negotiators are Accommodators, 38% are Assertives, and 55% are Analysts.",
      "7% of agreements fail, 38% are renegotiated, and 55% succeed on schedule.",
      "70% of negotiations should be spent listening, 38% questioning, and 55% bargaining."
    ],
    "correctAnswer": 0,
    "explanation": "UCLA psychologist Albert Mehrabian's rule shows that when words and nonverbal cues clash, humans rely overwhelmingly on tone (38%) and body language (55%), while words account for only 7%. If a counterpart says 'Yes' but their voice drops or they tense up, their nonverbals reveal the truth: the agreement is counterfeit.",
    "citation": "Chapter 8: Guarantee Execution - The 7-38-55 Percent Rule"
  },
  {
    "id": "nsv-q29",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does Chris Voss\u2019s 'Rule of Three' protect a negotiator against counterfeit commitments and implementation failure?",
    "options": [
      "You give the counterpart three business days to reconsider before signing.",
      "You get the counterpart to reaffirm their agreement or consensus three times during the conversation using three different techniques (e.g., calibrated questions, labels, and summaries).",
      "You must demand three separate signatures on three carbon copies of the contract.",
      "You make sure to negotiate only with groups containing at least three committee members."
    ],
    "correctAnswer": 1,
    "explanation": "It is very easy for a counterpart to give a fake 'Yes' once to be polite. The Rule of Three involves getting them to agree three times in one conversation: first with an initial agreement, second by labeling their hesitation, and third with a calibrated 'How' question regarding execution. It is virtually impossible to maintain a counterfeit 'Yes' three times in a row.",
    "citation": "Chapter 8: Guarantee Execution - The Rule of Three"
  },
  {
    "id": "nsv-q30",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "hard",
    "type": "concept",
    "question": "What linguistic patterns characterize the 'Pinocchio Effect' and pronoun usage among deceptive or low-authority negotiators?",
    "options": [
      "Deceptive people use very short monosyllabic words and avoid all adjectives.",
      "Liars work harder to deceive, using longer, more complex sentences, and overuse third-person pronouns ('they', 'he', 'one') to create distance; furthermore, people with little real authority overuse 'I' and 'me'.",
      "Liars speak in an unmistakable high-pitched falsetto and stutter on vowels.",
      "People with real executive authority always use first-person singular pronouns ('I', 'my') to demonstrate decisive power."
    ],
    "correctAnswer": 1,
    "explanation": "Research on the Pinocchio Effect reveals that liars use more words, elaborate explanations, and third-person pronouns to distance themselves from their falsehoods. Conversely, savvy decision-makers with true authority use 'we' and 'they' to keep options open, while low-level underlings use 'I' and 'me' to project false importance.",
    "citation": "Chapter 8: Guarantee Execution - The Pinocchio Effect & The Pronoun Rule"
  },
  {
    "id": "nsv-q31",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "You are negotiating an enterprise SaaS contract with a VP who seems eager to sign. How do you apply Voss\u2019s methods to identify hidden 'behind-the-table' deal killers before they torpedo implementation?",
    "options": [
      "Hire a corporate investigator to perform background checks on the company board.",
      "Insist that the CEO attend the next meeting or cancel the deal.",
      "Insert a massive financial liquidated damages clause for breach of contract.",
      "Ask calibrated questions like: 'How does this deal affect the rest of your team?' and 'What do your colleagues see as the main challenge to implementing this?'"
    ],
    "correctAnswer": 3,
    "explanation": "Behind-the-table deal killers are stakeholders (IT, legal, finance) who aren't in the room but can veto execution. By asking calibrated questions about how the deal impacts colleagues not on the call, you unearth hidden obstacles and turn the VP into your internal champion.",
    "citation": "Chapter 8: Guarantee Execution - How to Influence the Behind-the-Table Deal Killers"
  },
  {
    "id": "nsv-q32",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are the three distinct negotiator archetypes identified by Chris Voss, and how does their orientation toward time and relationship differ?",
    "options": [
      "Shark, Dolphin, and Owl; Sharks focus on speed, Dolphins on harmony, and Owls on wisdom.",
      "Authoritarian, Democratic, and Laissez-faire; Authoritarians command, Democrats vote, Laissez-faire delay.",
      "Competitor, Collaborator, and Avoider; Competitors win, Collaborators compromise, Avoiders flee.",
      "Analyst (methodical, data-driven, views time as preparation, hates surprises); Accommodator (relationship-focused, loves building rapport, views time as connection); Assertive (direct, time is money, aggressive, values winning and respect over being liked)."
    ],
    "correctAnswer": 3,
    "explanation": "Voss classifies negotiators into three types: 1) Analyst (needs facts, data, and silence to think; time is for research), 2) Accommodator (friendly, values relationship, can give counterfeit yeses to maintain peace; time is for connection), and 3) Assertive (time is money, blunt, ego-driven, values respect; wants to win).",
    "citation": "Chapter 9: Bargain Hard - What Kind of Negotiator Are You?"
  },
  {
    "id": "nsv-q33",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the exact mathematical progression of offer increments prescribed by the 'Ackerman Model'?",
    "options": [
      "50% -> 70% -> 90% -> 100% of your target.",
      "65% -> 85% -> 95% -> 100% of your target price, with three diminishing raises of 20%, 10%, and 5%.",
      "75% -> 80% -> 85% -> 90% of your target price in equal 5% increments.",
      "Start at 100% and reduce by 10% each round until reaching 65%."
    ],
    "correctAnswer": 1,
    "explanation": "Created by former CIA officer Mike Ackerman, the model uses: 1) Target price = 100%; 2) First offer = 65%; 3) Second offer = 85% (+20%); 4) Third offer = 95% (+10%); 5) Final offer = 100% (+5%). The diminishing increments psychologically convince the counterpart that they are wringing every last drop of blood from you.",
    "citation": "Chapter 9: Bargain Hard - The Ackerman Model"
  },
  {
    "id": "nsv-q34",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does the final offer in the Ackerman Model require a precise, non-round number (e.g., $37,543 rather than $37,500 or $38,000) accompanied by a non-monetary item?",
    "options": [
      "Because non-round numbers carry enormous psychological weight, signaling that the figure was calculated down to the penny based on hard mathematical limits rather than pulled from thin air; the non-monetary gift confirms you are financially tapped out.",
      "Because odd numbers are considered lucky in international diplomacy.",
      "Because non-round numbers confuse tax audit algorithms.",
      "Because bank wire transfers require odd numerical digits to prevent fraud."
    ],
    "correctAnswer": 0,
    "explanation": "A round number looks arbitrary and negotiable. A precise non-round number ($37,543) implies rigorous calculation and an absolute financial ceiling. Pairing it with a non-monetary concession ('and I'll throw in free expedited delivery') signals that your wallet is empty.",
    "citation": "Chapter 9: Bargain Hard - The Ackerman Model"
  },
  {
    "id": "nsv-q35",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "A commercial landlord opens lease negotiations by hitting you with an outrageous, insulting rental price that is double the market rate. According to Voss, how do you 'take a punch' without counter-anchoring or getting dragged into a compromise?",
    "options": [
      "Threaten to report them to the local housing authority for price gouging.",
      "Dodge the anchor using tactical empathy and calibrated questions: 'It sounds like you have compelling reasons for that rate; how does that figure compare to comparable commercial vacancies on this street?'",
      "Immediately offer half the market rate to balance their extreme anchor.",
      "Accept their offer on the condition that they pay for all utilities and renovations."
    ],
    "correctAnswer": 1,
    "explanation": "Kick-ass negotiators open with extreme anchors to knock you off your game. If you counter-anchor, you enter a brawl; if you split the difference, you lose. The correct move is to deflect the punch using labels and calibrated questions that test their justification without accepting the frame.",
    "citation": "Chapter 9: Bargain Hard - How to Take a Punch"
  },
  {
    "id": "nsv-q36",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "easy",
    "type": "concept",
    "question": "What is Chris Voss\u2019s rule regarding anger during negotiations?",
    "options": [
      "Uncontrolled emotional anger creates defensiveness and retaliatory spite; strategic boundaries should be delivered calmly with zero hostility (e.g., 'I am sorry, that just doesn't work for me').",
      "You should always pretend to break a chair to demonstrate toughness.",
      "Never express any disagreement under any circumstance.",
      "Uncontrolled anger is a sign of passion and always intimidates the counterpart into submission."
    ],
    "correctAnswer": 0,
    "explanation": "Real anger triggers fight-or-flight hormones, shuts down creative problem solving, and provokes retaliation. Voss emphasizes that you can set unbending boundaries without anger: 'The person across the table is not the problem; the situation is.'",
    "citation": "Chapter 9: Bargain Hard - Anger"
  },
  {
    "id": "nsv-q37",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Drawing on Nassim Nicholas Taleb's terminology, what is a 'Black Swan' in a negotiation?",
    "options": [
      "A hidden, unforeseen piece of information\u2014an 'unknown unknown'\u2014that, once discovered, completely transforms the leverage and dynamics of the deal.",
      "A catastrophic fraud that voids a signed contract.",
      "A negotiator who uses passive-aggressive silence to stall talks.",
      "An unexpected legal loophole discovered in an appendix."
    ],
    "correctAnswer": 0,
    "explanation": "In every negotiation, there are Known Knowns (facts both sides know), Known Unknowns (questions you anticipate), and Unknown Unknowns (Black Swans). Black Swans are game-changing pieces of intelligence that neither side expects to be decisive until they surface.",
    "citation": "Chapter 10: Find the Black Swan - Finding the Unknown Unknowns"
  },
  {
    "id": "nsv-q38",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "hard",
    "type": "concept",
    "question": "What are the three types of leverage described by Chris Voss, and what makes 'Normative Leverage' uniquely powerful?",
    "options": [
      "Financial, Legal, and Physical; Legal leverage always wins in court.",
      "Primary, Secondary, and Tertiary; Primary leverage refers to cash on hand.",
      "Positive (ability to provide value), Negative (ability to inflict loss/harm), and Normative (holding the counterpart accountable to their own rules, values, and stated standards).",
      "Internal, External, and Lateral; Lateral leverage relies on media leaks."
    ],
    "correctAnswer": 2,
    "explanation": "Positive leverage is withholding what they want; Negative leverage is threatening what they fear. Normative leverage is using their own stated principles, moral codes, or corporate policies: if you can show an inconsistency between their stated ideals and their current stance, their internal need for cognitive consistency compels them to yield.",
    "citation": "Chapter 10: Find the Black Swan - The Three Types of Leverage"
  },
  {
    "id": "nsv-q39",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In the Cleveland bank crisis involving hostage-taker William Griffin, FBI doctrine held that hostage-takers do not execute hostages on deadline. Why did Griffin kill a hostage at his 3:00 PM deadline, and what lesson did Voss draw about a counterpart's 'religion'?",
    "options": [
      "Griffin had a hidden 'religion' (worldview): he was terminally ill and sought 'suicide by cop' at precisely 3:00 PM; assuming he shared standard rational desires blinded negotiators to his Black Swan.",
      "Griffin was seeking a multimillion-dollar helicopter escape.",
      "Griffin had an accomplice who gave him false orders.",
      "Griffin did not hear the telephone ring because of bad wiring."
    ],
    "correctAnswer": 0,
    "explanation": "Griffin's hidden worldview wasn't about money or escape; he intended to die and wanted the police to kill him at 3:00 PM. Because the FBI negotiators operated on standard rational assumptions ('hostage-takers never kill on deadline'), they failed to uncover his true motivation. Negotiators must discover the counterpart's unique 'religion' (their core psychological drivers).",
    "citation": "Chapter 10: Find the Black Swan - Know Their \u201cReligion\u201d"
  },
  {
    "id": "nsv-q40",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "medium",
    "type": "concept",
    "question": "When a negotiating counterpart appears totally irrational, bizarre, or 'crazy,' what does Chris Voss say is almost always the real explanation?",
    "options": [
      "They have been instructed by their attorneys to feign incompetence.",
      "They are not crazy; they are usually operating on bad information, constrained by hidden internal pressures you cannot see, or pursuing subterranean interests you haven't uncovered.",
      "They are deliberately stalling to run out the statute of limitations.",
      "They are clinically insane and must be replaced immediately."
    ],
    "correctAnswer": 1,
    "explanation": "Dismissing a counterpart as 'crazy' is a lazy cop-out. People act bizarrely when: 1) they are ill-informed (bad data), 2) they have hidden constraints (internal bosses or rules), or 3) they have hidden interests (ego, fear, prestige) that matter more to them than the stated business issue.",
    "citation": "Chapter 10: Find the Black Swan - They Are Not Crazy, They Are . . ."
  },
  {
    "id": "nsv-q41",
    "chapterId": "appendix",
    "chapterName": "Appendix: Prepare a Negotiation One Sheet",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does Chris Voss criticize traditional negotiation experts' obsession with BATNA (Best Alternative to a Negotiated Agreement), calling it the source of a 'wimp-win' mentality?",
    "options": [
      "Because BATNA only applies to real estate transactions, not kidnapping.",
      "Because obsessing over your walk-away BATNA turns it into your target; under stress, human focus gravitates to that minimum, causing you to mentally concede everything above it before even bargaining.",
      "Because BATNA is mathematically too difficult to calculate for small businesses.",
      "Because having a BATNA is illegal under federal antitrust regulations."
    ],
    "correctAnswer": 1,
    "explanation": "While BATNA provides security, obsessing over it leads to 'wimp-win' bargaining. Humans have limited cognitive focus under stress; if your focus is your minimum bottom line, that is where you will end up. Voss advises thinking about worst/best outcomes, but writing down only an ambitious, specific best-case goal.",
    "citation": "Appendix: Prepare a Negotiation One Sheet - Section I: The Goal"
  },
  {
    "id": "nsv-q42",
    "chapterId": "appendix",
    "chapterName": "Appendix: Prepare a Negotiation One Sheet",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are the five core sections of the 'Negotiation One Sheet' designed by Chris Voss's Black Swan Group?",
    "options": [
      "1) Market Research, 2) SWOT Analysis, 3) Competitor Pricing, 4) Opening Script, 5) Fallback Plan.",
      "Section I: The Goal; Section II: Summary; Section III: Labels/Accusation Audit; Section IV: Calibrated Questions; Section V: Non-Cash Offers.",
      "1) Financial Ledger, 2) Legal Disclaimers, 3) BATNA, 4) Concession Schedule, 5) Contract Signatures.",
      "1) Icebreaker, 2) Agenda, 3) Hard Anchor, 4) Compromise Terms, 5) Follow-up Email."
    ],
    "correctAnswer": 1,
    "explanation": "The five sections of the Negotiation One Sheet are: Section I: The Goal (specific ambitious best-case); Section II: Summary (factual narrative to get 'That's right'); Section III: Labels/Accusation Audit (3-5 labels diffusing fears); Section IV: Calibrated Questions (3-5 What/How queries); Section V: Non-Cash Offers (valuable items to trade).",
    "citation": "Appendix: Prepare a Negotiation One Sheet"
  },
  {
    "id": "nsv-q43",
    "chapterId": "appendix",
    "chapterName": "Appendix: Prepare a Negotiation One Sheet",
    "difficulty": "hard",
    "type": "scenario",
    "question": "When drafting Section IV (Calibrated Questions) of your One Sheet to identify and diffuse deal-killing issues, why is it effective to ask questions in groups of two or three?",
    "options": [
      "Because three questions take exactly 15 minutes to answer.",
      "Because asking 2 to 3 related questions from slightly different angles ('What are we up against here?', 'What happens if you do nothing?') helps the counterpart explore the underlying dilemma without feeling cross-examined.",
      "Because it wears down the counterpart's vocal cords.",
      "Because repeating questions three times ensures legal admissibility."
    ],
    "correctAnswer": 1,
    "explanation": "Asking 2 or 3 calibrated questions grouped together prompts the counterpart to look at the same bottleneck from different perspectives. It reveals hidden constraints and simultaneously pushes them to view the situation from your point of view.",
    "citation": "Appendix: Prepare a Negotiation One Sheet - Section IV: Calibrated Questions"
  },
  {
    "id": "nsv-q44",
    "chapterId": "appendix",
    "chapterName": "Appendix: Prepare a Negotiation One Sheet",
    "difficulty": "medium",
    "type": "concept",
    "question": "What guiding question should you ask yourself when preparing Section V (Non-Cash Offers) of your Negotiation One Sheet?",
    "options": [
      "'How much interest can we charge on delayed payments?'",
      "'How can we force them to wire cash within 24 hours?'",
      "'What is the cheapest item we can dump on them to get rid of inventory?'",
      "'What could they give that would almost get us to do it for free?'"
    ],
    "correctAnswer": 3,
    "explanation": "In Section V, you search for non-cash items possessed by the counterpart that are low-cost for them to give, but enormously valuable to you (like Voss negotiating a magazine cover story about him instead of extra speaking fees). Asking 'What could they give that would almost get us to do it for free?' expands the negotiation beyond dollars and cents.",
    "citation": "Appendix: Prepare a Negotiation One Sheet - Section V: Noncash Offers"
  },
  {
    "id": "vq45",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chris Voss's taxonomy of negotiator personality types, what is the core psychological vulnerability of the 'Accommodator,' and what tactical mistake do other negotiators frequently make when bargaining with them?",
    "options": [
      "Accommodators are driven by statistical precision; the mistake is assuming their silence indicates satisfaction rather than deep analytical skepticism.",
      "Accommodators are driven by relationship harmony and fear conflict; the mistake is mistaking their warm sociability for genuine agreement and failing to uncover their unvoiced implementation objections.",
      "Accommodators are motivated by rapid closure; the mistake is presenting too many non-monetary concessions, which overwhelms their linear decision-making process.",
      "Accommodators seek personal dominance; the mistake is using calibrated 'How' questions, which they perceive as direct challenges to their executive authority."
    ],
    "correctAnswer": 1,
    "explanation": "Accommodators love building relationships and will converse endlessly to maintain social harmony. Their core fear is conflict and rejection. Consequently, their fatal flaw is agreeing to terms just to keep the peace ('counterfeit yes') and overpromising deliverables they cannot execute. Negotiators mistakenly believe the deal is done because the Accommodator is smiling and agreeable. To negotiate with them effectively, you must gently unearth their hidden reservations using calibrated implementation questions and make it safe for them to voice objections without endangering the friendship.",
    "citation": "Chapter 9: Bargain Hard - What Kind of Negotiator Are You? (Accommodator)"
  },
  {
    "id": "vq46",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "You are negotiating an equipment contract with an 'Assertive' VP who repeatedly interrupts you, checks his watch, and bluntly demands: 'Cut the fluff and give me your bottom-line price right now.' According to Voss, what is the cardinal psychological rule for dealing with an Assertive in this state?",
    "options": [
      "An Assertive will not listen to a single word you say until they are completely convinced you have listened to and understood their perspective first; let them talk, mirror and label their position, and do not interrupt.",
      "Match their aggression immediately with a sharp downward inflection and a firm take-it-or-leave-it counter-anchor to command their respect.",
      "Maintain absolute silence for at least ten seconds, which triggers an Assertive's fear of social isolation and compels them to make an unprompted concession.",
      "Present a comprehensive 20-page spreadsheet detailing your cost structure to mathematically disprove their aggressive claims."
    ],
    "correctAnswer": 0,
    "explanation": "Assertives believe time is money and view negotiation as a competitive contest. Their primary blind spot is that they love to talk and demand results, often without gathering all the facts. Crucially, an Assertive counterpart cannot and will not absorb your arguments until they feel completely heard. If you try to force your points or push back while they are amped up, they escalate into combat mode. You must allow them to empty their emotional tank, mirror their key points, and summarize their stance until they acknowledge that you understand them; only then will they become receptive to calibrated questions.",
    "citation": "Chapter 9: Bargain Hard - What Kind of Negotiator Are You? (Assertive)"
  },
  {
    "id": "vq47",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "hard",
    "type": "concept",
    "question": "How does 'Dynamic Silence' function across the three negotiator archetypes, and why is an amateur negotiator most likely to self-sabotage when using silence against an 'Analyst'?",
    "options": [
      "Silence triggers panic in Analysts; negotiators fail because they do not step in quickly enough to provide reassurance before the Analyst terminates the meeting.",
      "Analysts view silence as a sign of intellectual inferiority; negotiators should never use silence with Analysts, reserving it exclusively for Assertives.",
      "Analysts perceive silence simply as time to think and evaluate data; anxious negotiators misinterpret this cognitive processing as rejection or anger, prematurely breaking the silence with unforced concessions or idle chatter that irritates the Analyst.",
      "Silence causes Analysts to make impulsive counter-offers; negotiators fail by refusing to accept the Analyst's initial emotional outburst."
    ],
    "correctAnswer": 2,
    "explanation": "To an Analyst, silence is not an emotional weapon or a void to be feared\u2014it is simply time to calculate, process data, and think methodically. To an Accommodator, prolonged silence feels like anger or relationship damage; to an Assertive, it feels like wasted time. When an Analyst falls silent, insecure negotiators panic, assuming the silence signals disapproval. They rush to fill the vacuum with small talk, justifications, or spontaneous price drops, which disrupts the Analyst's thoughts and makes the Analyst view them as sloppy, pushy, and untrustworthy.",
    "citation": "Chapter 9: Bargain Hard - What Kind of Negotiator Are You? (Analyst)"
  },
  {
    "id": "vq48",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Bargain Hard (Ackerman Model & Types)",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Chris Voss argue that the traditional Golden Rule\u2014'Treat others the way you want to be treated'\u2014is dangerous in negotiations, especially when an Accommodator negotiates with an Analyst?",
    "options": [
      "Because treating people with empathy violates federal crisis negotiation protocols regarding ethical neutrality.",
      "Because following the Golden Rule projects your own emotional priorities onto your counterpart; an Accommodator's rapport-building chatter feels like manipulative time-wasting to an Analyst, while the Analyst's clinical silence feels like cold hostility to the Accommodator.",
      "Because the Golden Rule is mathematically incompatible with the 65-85-95-100 Ackerman bargaining progression.",
      "Because the Golden Rule only applies when negotiating with Assertives who respect mutual ethical reciprocity."
    ],
    "correctAnswer": 1,
    "explanation": "The traditional Golden Rule assumes everyone shares your psychological operating system. Voss replaces it with the Black Swan principle: 'Don't treat people how you want to be treated; treat them how they need to be treated.' If an Accommodator tries to build rapport with an Analyst using jokes, personal stories, and warm small talk, the Analyst feels rushed and suspicious. Conversely, when the Analyst goes quiet and demands spreadsheets, the Accommodator feels personally rejected. Effective negotiators adapt their style to the counterpart's needs rather than their own.",
    "citation": "Chapter 9: Bargain Hard - What Kind of Negotiator Are You?"
  },
  {
    "id": "vq49",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In the high-frequency kidnapping cases in Haiti handled by Chris Voss, kidnappers issued ferocious ultimatums demanding hundreds of thousands of dollars by Friday afternoon or the hostage would be killed. What critical discovery about the kidnappers' 'deadline' gave the FBI decisive leverage?",
    "options": [
      "The kidnappers had bank loan installments due every Friday at 5:00 PM, making them vulnerable to asset forfeiture by the Haitian central bank.",
      "The kidnappers' satellite phones ran out of pre-paid minutes precisely at midnight on Fridays, forcing them to accept any cash offer on the table.",
      "Haitian law enforcement conducted island-wide curfew sweeps on Saturday mornings, meaning kidnappers were forced to release all hostages before dawn.",
      "The kidnappers were not ideological extremists but young gang members whose Friday deadline was driven by their desire to get party cash for the weekend; waiting them out turned their own social schedule into a ticking clock that collapsed their ransom demands."
    ],
    "correctAnswer": 3,
    "explanation": "Voss discovered that Haitian kidnappings followed an internal lifestyle rhythm: the gangs abducted victims early in the week, issued terrifying life-or-death ultimatums, and demanded ransom by Friday so they could buy rum, food, and party in Port-au-Prince over the weekend. Understanding that the deadline was driven by a desire to party\u2014not an ideological imperative to kill the hostage\u2014allowed Voss to coach families to calmly drag talks out into Thursday and Friday morning. As the weekend approached, the kidnappers felt the squeeze of their own party schedule and slashed demands from $150,000 down to a few thousand dollars just to get party cash in hand.",
    "citation": "Chapter 6: Bend Their Reality - Discovering the Haitian Kidnapping Deadline"
  },
  {
    "id": "vq50",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the crucial difference in psychological impact between a sentence delivered with an 'inquiring upward inflection' versus a 'downward inflection,' and what is the risk of using the wrong one during hard bargaining?",
    "options": [
      "Upward inflection turns a statement into a curious question that invites elaboration and psychological safety; downward inflection communicates calm, immovable certainty. Pitching upward on a price anchor makes you sound uncertain and invites the counterpart to push you around.",
      "Upward inflection conveys factual finality and authority; downward inflection signals submissiveness and invites counter-arguments.",
      "Downward inflection should only be used by women, while upward inflection is strictly reserved for male negotiators using the Late-Night FM DJ voice.",
      "Both inflections have identical psychological impacts; vocal pitch only influences outcomes when speaking in foreign languages."
    ],
    "correctAnswer": 0,
    "explanation": "An inquiring upward inflection pitches up at the end of the sentence like a question. It communicates curiosity, opens the floor, and makes mirroring effective because it prompts the counterpart to clarify without feeling defensive. Conversely, a downward inflection drops in pitch at the end, conveying calm, steady authority and immovable factuality ('I am in control; this is reality'). If a negotiator states their price or boundary with an upward inflection ('We can only pay $40,000?'), it sounds like they are asking for permission, signaling weakness and practically begging the other side to demand concessions.",
    "citation": "Chapter 2: Be a Mirror - The Voice"
  },
  {
    "id": "vq51",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "During the 1993 Chase Manhattan bank robbery in Brooklyn, bank robber Chris Watts boasted on the phone: 'There's four of us in here.' How did Chris Voss use mirroring and vocal calibration to dismantle this deception without triggering a firefight?",
    "options": [
      "Voss laughed mockingly to provoke Watts into passing the phone to his accomplices.",
      "Voss stated firmly: 'The thermal imaging cameras outside show only two heat signatures in the vault, so you are lying.'",
      "Voss calmly mirrored with an inquisitive upward inflection: 'There's four of you?', prompting Watts to stutter and stumble over naming his fictional partners until he exposed his own bluff.",
      "Voss asked Watts to provide the social security numbers of all four robbers so the FBI could contact their families."
    ],
    "correctAnswer": 2,
    "explanation": "Calling Watts a liar or confronting him with tactical surveillance would have triggered defensive rage and endangered the hostages. Instead, Voss calmly mirrored Watts's claim with an inquisitive upward pitch: 'There's four of you?' This gentle prompt forced Watts to elaborate and substantiate the assertion. Watts stammered: 'Yeah, there's four of us... me, my partner, and...' He couldn't name the others. Combined with active listening to the ambient noise in the bank, Voss confirmed that Watts only had one accomplice, preventing an overzealous tactical SWAT breach while preserving rapport.",
    "citation": "Chapter 2: Be a Mirror - The Chase Manhattan Bank Robbery"
  },
  {
    "id": "vq52",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does opening a difficult conversation with a denial like 'I don't want you to think we are trying to take advantage of you' fail neurologically, and how does a structured Accusation Audit correct this error?",
    "options": [
      "Denials activate the hippocampus and cause memory loss; the Accusation Audit bypasses this by delivering compliments first.",
      "The brain struggles to process negations, so hearing 'don't think we are taking advantage' directly implants the suspicion that you are; an Accusation Audit proactively states the worst accusations as labels, diffusing the negative charge through vocalization.",
      "Denials are legally binding admissions of civil liability under federal contract law; the Accusation Audit is designed by attorneys to maintain immunity.",
      "Denials only fail when negotiating with Accommodators; Assertives prefer direct denials because they value bluntness."
    ],
    "correctAnswer": 1,
    "explanation": "Neurologically and linguistically, human cognition cannot process a negative without first envisioning the underlying concept (telling someone 'Don't think of a pink elephant' immediately makes them imagine a pink elephant). Saying 'I don't want you to think we're greedy' plants the suspicion that you are greedy. An Accusation Audit does the opposite: it proactively articulates every ugly, unfair, or vicious thought the counterpart might have ('You probably think we are being greedy, inconsiderate, and totally ignoring your constraints'). Voicing negative emotions aloud deactivates amygdala arousal and prompts the counterpart's natural urge to soften the judgment ('Well, I wouldn't call you greedy...').",
    "citation": "Chapter 3: Don't Feel Their Pain, Label It - Clear the Road Before Advertising the Destination"
  },
  {
    "id": "vq53",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "In kidnapping crises (such as the Ecuador jungle abduction of Jos\u00e9 Leonardo), the victim's family is frequently targeted by opportunistic con artists and middlemen demanding immediate ransom payments. What calibrated question did Voss teach families to deploy as an impenetrable fraud filter?",
    "options": [
      "'What is your bank account IBAN number so our intelligence unit can wire the deposit?'",
      "'Which political faction or rebel cartel do you officially represent?'",
      "'Why don't you let him walk to the nearest church before we negotiate the balance?'",
      "'How can we pay you anything until we know he is okay?' (or 'How do we know he is alive?')"
    ],
    "correctAnswer": 3,
    "explanation": "In kidnapping environments, opportunists intercept communications and demand ransoms for hostages they do not possess. Demanding proof of life through aggressive threats can alienate real kidnappers, while paying blindly funds frauds. Asking the calibrated question: 'How can we pay you anything until we know he is okay?' or 'How do we know he is alive?' reverses the burden. It frames proof of life as a shared logistical problem. Real captors can answer or obtain a proof-of-life answer to a private question only the hostage knows, whereas impostors and copycats are instantly paralyzed and filtered out because they cannot provide proof.",
    "citation": "Chapter 7: Create the Illusion of Control - Calibrated Questions & Kidnapping Defense"
  },
  {
    "id": "vq54",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "During the 47-hour standoff on the National Mall with Dwight Watson\u2014a distraught North Carolina tobacco farmer who drove his tractor into a pond claiming he had explosives\u2014what hidden 'religion' (worldview) did Chris Voss uncover that paved the way for a peaceful surrender?",
    "options": [
      "Watson was an undercover FBI informant whose handler had failed to check in.",
      "Watson was seeking a multimillion-dollar federal agricultural subsidy for organic tobacco farming.",
      "Watson was an 82nd Airborne military veteran who lived by an unbending code of honor and Christian faith; framing his surrender around the military protocol of 'withdrawing with honor' gave him a dignified exit.",
      "Watson was waiting for a scheduled solar eclipse to begin his spiritual retreat."
    ],
    "correctAnswer": 2,
    "explanation": "In Chapter 10, Voss defines 'religion' not merely as theology, but as the counterpart's core rules of life, self-identity, and sacred values. Watson had paralyzed Washington, D.C., but treating him as a common terrorist failed because he did not care about money or self-preservation. By deeply listening to his rants, the FBI discovered his 'religion': he was a proud 82nd Airborne paratrooper who viewed his protest as an honorable mission for his fellow farmers. Negotiators respected his military code, addressed him with dignity, and framed his stand-down as an orderly, honorable military withdrawal rather than a defeat, enabling him to surrender without bloodshed.",
    "citation": "Chapter 10: Find the Black Swan - Know Their \u201cReligion\u201d"
  },
  {
    "id": "vq55",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Find the Black Swan (Unknowns & Leverage)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "During the Abu Sayyaf hostage crisis in the Philippines involving American missionaries Martin and Gracia Burnham, what hidden 'Black Swan' regarding third-party dynamics severely undermined the FBI's official negotiation efforts?",
    "options": [
      "A corrupt local Philippine politician was running an unauthorized, parallel ransom negotiation behind the FBI's back to buy the hostages' release for his own political prestige.",
      "The kidnappers had mistakenly kidnapped the wrong American missionary couple from a neighboring island.",
      "The Philippine military had secretly equipped the hostages with satellite locator transponders that jammed FBI radios.",
      "Abu Sayyaf's leadership had converted to pacifism three months prior to the kidnapping."
    ],
    "correctAnswer": 0,
    "explanation": "In Chapter 10, Voss recounts the tragic Burnham case to demonstrate how unknown third-party actors can destroy deal architecture. While the FBI and official negotiators were carefully managing communications, a rival Philippine politician hired his own intermediaries to secretly offer ransom money to Abu Sayyaf, hoping to free the missionaries himself and embarrass the sitting Philippine president. This rogue negotiation drove up the terrorists' ransom expectations and leaked proof-of-life intelligence, underscoring that unseen 'behind-the-table' stakeholders can completely derail agreements if their hidden interests remain undiscovered.",
    "citation": "Chapter 10: Find the Black Swan - Finding the Unknown Unknowns"
  },
  {
    "id": "vq56",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "During a salary negotiation for a new executive role, your prospective employer offers a baseline salary that is slightly below your target. Instead of haggling aggressively over dollars, what strategic question does Chris Voss recommend asking to enroll your boss as your personal advocate?",
    "options": [
      "'Why does this company pay its executives 15% below the national median according to Glassdoor?'",
      "'What would it take for the CEO to personally match my previous employer's equity package?'",
      "'Can you guarantee that I will never be asked to work overtime without double compensation?'",
      "'How can I be guaranteed to be involved in projects critical to the strategic future of this company?' (or 'What does it take to be successful here?')"
    ],
    "correctAnswer": 3,
    "explanation": "Asking 'How can I be guaranteed to be involved in projects critical to the company's future?' or 'What does it take to be successful here?' is a masterstroke. First, it pivots the conversation from an adversarial expense negotiation (you demanding cash) to value creation (you solving the boss's top priorities). Second, it subtly enrolls the boss as your personal mentor and champion. Once the boss articulates what success looks like under their supervision, they develop a psychological stake in seeing you achieve those milestones, making future promotions and salary increases their personal achievement.",
    "citation": "Chapter 7: Create the Illusion of Control - How to Negotiate a Better Salary"
  },
  {
    "id": "vq57",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "hard",
    "type": "scenario",
    "question": "You are negotiating an internal promotion, but your department head insists: 'My hands are tied; HR has put a hard salary cap on this job grade that I cannot exceed.' How does Voss advise using non-monetary terms and time horizons to bend reality without accepting an underpaid position?",
    "options": [
      "Accept the capped salary immediately, but file a confidential grievance with the corporate labor board on your first day.",
      "Negotiate valuable non-cash terms (such as title, remote flexibility, or company-sponsored training) paired with an agreed-upon early performance review milestone (e.g., compensation review at 3 or 6 months based on defined KPIs).",
      "Threaten to quit immediately to test whether their HR policy is genuine or a counterfeit boundary.",
      "Ask your boss to secretly pay the salary difference directly from his personal discretionary expense account."
    ],
    "correctAnswer": 1,
    "explanation": "When an employer faces legitimate budget constraints or bureaucratic salary caps, continuing to demand immediate cash creates an impasse. Voss advises expanding the pie: negotiate terms that are cheap for the employer to grant but high-value to you (a superior title, executive mentorship, flexible scheduling, tuition reimbursement). Crucially, link this to an agreed-upon accelerated performance review (e.g., 'If I achieve X deliverables in 6 months, can we agree now to review and adjust my compensation to Y?'). This allows the manager to hire you within today's constraints while locking in future upside.",
    "citation": "Chapter 6: Bend Their Reality - How to Negotiate a Better Salary"
  },
  {
    "id": "vq58",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "During an enterprise partnership discussion, the CEO opposite you says, 'Yes, we can definitely meet that launch deadline,' but her voice hesitates slightly, she leans back in her chair, and her eyes glance toward the door. According to Voss, what is the exact tactical sequence to address this non-verbal incongruence?",
    "options": [
      "Immediately challenge her: 'You say yes, but your body language proves you are lying to me.'",
      "Ignore the nonverbal cue and immediately send a binding legal contract before she can reconsider her verbal agreement.",
      "Gently label the hesitation in your FM DJ voice: 'I heard you say 'yes,' but it seemed like there was some hesitation in your voice. It's important that we get this right and that you feel comfortable.'",
      "Demand an immediate penalty clause of $10,000 for every day the launch is delayed past the agreed date."
    ],
    "correctAnswer": 2,
    "explanation": "Under the 7-38-55 Rule, when verbal words (7%) clash with vocal tone (38%) or body language (55%), people invariably trust the nonverbal signals. Calling someone a liar creates immediate defensiveness. Instead, Voss teaches negotiators to gently label the discrepancy with empathy: 'I heard you say 'yes,' but it seemed like there was some hesitation in your voice. It's important that we get this right.' If they attempt to brush it off ('Oh, it's nothing'), double down warmly: 'No, this is important, let's make sure we address it.' This gives the counterpart permission to reveal hidden operational constraints before the agreement fails.",
    "citation": "Chapter 8: Guarantee Execution - The 7-38-55 Percent Rule"
  },
  {
    "id": "vq59",
    "chapterId": "ch8",
    "chapterName": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 8, Chris Voss cites forensic research by Deepak Malhotra and linguistic studies on the 'Pinocchio Effect' and the 'Pronoun Rule.' What linguistic patterns distinguish deceptive negotiators and low-authority underlings from true decision-makers?",
    "options": [
      "Deceptive negotiators speak in short, monosyllabic bursts; low-authority individuals avoid pronouns entirely.",
      "Liars consistently use future tense verbs; high-authority executives use passive voice in 100% of contract negotiations.",
      "Low-authority negotiators speak only in calibrated questions; liars exclusively use Late-Night FM DJ vocal inflection.",
      "Liars use significantly more words, overly elaborate sentences, and third-person pronouns ('they', 'he', 'the team') to distance themselves from lies; furthermore, low-authority negotiators overuse first-person singular pronouns ('I', 'me', 'my') to project artificial status, while real decision-makers use 'we' and 'us'."
    ],
    "correctAnswer": 3,
    "explanation": "The 'Pinocchio Effect' shows that just as Pinocchio's nose grew when he lied, a liar's sentence length and word count balloon when fabricating stories. Liars exert subconscious effort to sound credible, piling on unnecessary adjectives and using third-person pronouns ('they', 'them', 'the organization') to distance themselves from guilt. The 'Pronoun Rule' reveals organizational hierarchy: insecure subordinates with little real power puff themselves up by overusing 'I', 'me', and 'my' to sound important. In contrast, genuine power players downplay their ego, using 'we', 'our team', or 'the committee' to maintain negotiating maneuverability.",
    "citation": "Chapter 8: Guarantee Execution - The Pinocchio Effect & The Pronoun Rule"
  },
  {
    "id": "vq60",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "medium",
    "type": "scenario",
    "question": "Voss recounts a student who broke the news of a bad college exam grade to her parents by opening with: 'I have something terrible to tell you... you are going to be furious, you'll probably disown me, and you'll realize I'm the worst daughter ever.' Why was this extreme negative anchor so psychologically effective?",
    "options": [
      "By priming her parents' System 1 imaginations with catastrophic possibilities (such as criminal arrest, pregnancy, or drug addiction), the actual news of a failing grade felt like a minor relief, triggering empathy rather than fury.",
      "It caused her parents to suffer temporary cognitive dissonance, rendering them unable to grade her performance objectively.",
      "It allowed her parents to exercise their legal BATNA before reviewing her report card.",
      "Extreme anchors only work when communicating via written handwritten letters, as described in Harvard negotiation doctrine."
    ],
    "correctAnswer": 0,
    "explanation": "This scenario illustrates the power of an extreme emotional anchor combined with an Accusation Audit. When you warn someone that something horrifying has happened, their imagination runs wild with worst-case scenarios (arrest, pregnancy, death, financial ruin). By anchoring their expectations at absolute disaster, when the reality is revealed ('I got an F in statistics'), the reality feels comparatively manageable. Kahneman's prospect theory dictates that human emotional reactions are relative to a reference point; resetting their reference point to catastrophe transforms bad news into a relief.",
    "citation": "Chapter 6: Bend Their Reality - How to Anchor Their Emotions"
  },
  {
    "id": "vq61",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "hard",
    "type": "scenario",
    "question": "While Chris Voss strictly advises against asking questions that start with 'Why' because they trigger universal defensiveness, what is the one counterintuitive scenario where asking 'Why' is a devastatingly effective sales tactic?",
    "options": [
      "Asking a vendor 'Why are your prices so high?' to force them to offer an immediate 20% discount.",
      "Asking an employee 'Why did you fail to complete this task?' to assert executive dominance.",
      "Asking a prospective client 'Why would you ever leave your current supplier when they've been serving you for five years to go with a new firm like us?', forcing the client to articulate your competitive advantages and disqualify the incumbent.",
      "Asking kidnappers 'Why do you believe you will get away with this crime?' to plant moral doubt."
    ],
    "correctAnswer": 2,
    "explanation": "The word 'Why' instinctively provokes people to defend themselves and justify their positions. Normally, this shuts down negotiation. However, if you steer that defensiveness in your favor, 'Why' becomes a psychological weapon. When pitching a client currently using a competitor, asking: 'Why would you ever consider leaving your current vendor who has been doing this for years to hire us?' prompts the client to defend the idea of leaving their vendor. The client will list all the competitor's failings, missed deadlines, and poor service, effectively convincing themselves why they must hire you.",
    "citation": "Chapter 7: Create the Illusion of Control - Avoid \u201cWhy\u201d (The Strategic Exception)"
  },
  {
    "id": "vq62",
    "chapterId": "appendix",
    "chapterName": "Appendix: Prepare a Negotiation One Sheet",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the Negotiation One Sheet preparation architecture, how do Section II (The Summary) and Section IV (Calibrated Questions) work in direct tandem to smoke out hidden 'behind-the-table' veto players before a contract is finalized?",
    "options": [
      "Section II calculates the financial ROI, while Section IV sets the legal penalty clauses for non-delivery.",
      "Section II establishes deep tactical empathy by summarizing the counterpart's past pains until they blurt out 'That's right'; Section IV then leverages that trust to ask calibrated execution questions ('How does this affect your colleagues in legal and operations?') that unmask hidden deal killers.",
      "Section II forces the counterpart to sign a non-disclosure agreement, which allows Section IV to introduce the Ackerman bargaining progression without legal liability.",
      "Section II is designed exclusively for the seller, while Section IV is filled out by the buyer after the meeting concludes."
    ],
    "correctAnswer": 1,
    "explanation": "The One Sheet is designed so that each section fuels the next. In Section II, you craft a concise summary of the objective facts and emotional frustrations of the counterpart, engineered to trigger 'That's right' within the opening minutes. Having established total rapport and unconditional understanding, you earn the psychological license to probe deeper. In Section IV, you deploy pre-scripted calibrated questions targeted at implementation ('How does this affect the rest of your team?', 'What is the biggest challenge your colleagues see with this deal?'). This seamlessly turns the person across the table into your internal advocate, identifying behind-the-table veto players before they can derail execution.",
    "citation": "Appendix: Prepare a Negotiation One Sheet - Sections II & IV"
  }
];

const DEFAULT_DATACYCLISM_SUMMARIES = [
  {
    "id": "ch1",
    "chapterNumber": 1,
    "title": "Wooderson\u2019s Law",
    "bigIdea": "Human mating preferences display a profound gender asymmetry: while women's attraction scales dynamically with their own age along the age-parity line, male attraction is permanently anchored to women in their early twenties, regardless of how old the man gets.",
    "counterIntuitiveInsights": [
      "Men\u2019s sexual aims never mature: Named after Matthew McConaughey\u2019s character in Dazed and Confused ('I get older, they stay the same age'), Wooderson\u2019s Law states that male age and sexual preference are independent variables. A 20-year-old man and a 50-year-old man both rate 20- to 22-year-old women as the most physically attractive.",
      "Women prefer age parity: In sharp contrast to men, women\u2019s preferences track their own chronological age closely. A 20-year-old woman rates 23-year-old men highest, a 30-year-old woman prefers men who are 30, and a 40-year-old woman prefers men who are 38\u201340.",
      "Stated vs. Revealed age preferences: In profile search filters, older men state they are seeking age-appropriate women (e.g., a 45-year-old sets his filter to 35\u201348 to appear socially acceptable). However, their revealed behavior\u2014ratings and messages\u2014clusters heavily on women aged 20\u201322.",
      "The Demographic Squeeze for women: Census data shows single men outnumber single women in youth, but because men die earlier, marry older, and pursue women decades younger, women face an acute demographic cliff. For every 100 men pursuing a 20-year-old woman, only 9 are seeking a 50-year-old woman\u2014a 91% collapse in attention."
    ],
    "coreMechanics": [
      "The Age Parity Diagonal: The line where male and female ages are identical. Women's rating curves run parallel to this diagonal throughout life, whereas men's ratings form a flat horizontal plateau fixed at ages 20\u201322.",
      "Longitudinal vs. Cross-Sectional Data: While tracking individuals over decades is historically rare, cross-sectional snapshots of millions of simultaneous users reveal the immutable developmental trajectories of sexual desire."
    ],
    "keyExercises": [
      "Revealed Preference Audit: When evaluating algorithmic matches or marketing segments, separate stated demographic filters from uninhibited click/messaging behavior to discover actual consumer intent."
    ],
    "keyTakeaway": "Male physical attraction never grows up; it remains permanently arrested at age twenty, creating a severe demographic squeeze for women as they age."
  },
  {
    "id": "ch2",
    "chapterNumber": 2,
    "title": "Death by a Thousand Mehs",
    "bigIdea": "In online attention economies, consensus attractiveness loses to polarization. High variance in ratings\u2014having many people who adore you and many who dislike you\u2014generates dramatically more inbound messages than being universally considered 'cute'.",
    "counterIntuitiveInsights": [
      "The Power of Variance over Mean: Two individuals can share the exact same average 3.3-star attractiveness rating, yet the one with high variance (a polarized distribution of 1-star and 5-star ratings) receives nearly triple the messages of the low-variance individual (who receives consensus 3s and 4s).",
      "Game Theory of Competition Avoidance: When a suitor views a universally attractive person, he assumes everyone else is messaging them, making his odds near zero and causing him to hold back. When he views a polarizing person, he bets other suitors will be repelled, giving him a clear field of opportunity.",
      "The John Waters Principle: Cult director John Waters creates polarizing films with devoted followings because repelling the mainstream draws passionate fans closer. Bland consensus ('a thousand mehs') produces passive indifference.",
      "Accentuate Your Flaws: Trying to airbrush or soften quirky features (distinctive tattoos, unconventional body shapes, idiosyncratic styles) destroys the variance that drives inbound interest. Those who dislike the feature would never date you anyway, while those who love it are intensely motivated to message."
    ],
    "coreMechanics": [
      "Mathematical Variance in Attraction: A statistical metric measuring how widely scores scatter around the mean. OkCupid data proves incoming message volume correlates more strongly with rating variance than with raw average score.",
      "The Inbound Attention Threshold: Suitors only initiate contact when their personal valuation is high (5 stars) AND they perceive the competitive friction to be manageable."
    ],
    "keyExercises": [
      "Polarization Audit: Review profile images and branding assets. Remove generic, universally safe elements that provoke mild approval ('mehs') and highlight distinctive, authentic quirks that polarize opinions."
    ],
    "keyTakeaway": "Being polarizing eliminates competition: having some people hate your look is the statistical prerequisite for getting the people who love it to actually reach out."
  },
  {
    "id": "ch3",
    "chapterNumber": 3,
    "title": "Writing on the Wall",
    "bigIdea": "Digital communication has revolutionized courtship linguistics: long thoughtful letters fail to yield proportional returns, copy-pasted templates dominate efficiency per unit of time, and physical compliments reliably sabotage response rates.",
    "counterIntuitiveInsights": [
      "The Copy-Paste Efficiency Paradox: Writing custom, from-scratch messages yields only a ~25% higher response rate than sending an identical copy-pasted opener (e.g., ~30% vs. ~22%). Because a bespoke message takes 5\u201310 minutes while copy-pasting takes seconds, copy-pasters generate 10x more replies per hour of effort.",
      "The Message Length Plateau: The average initial message is roughly 100 characters (Twitter-length). Reply rates plateau quickly: writing paragraphs of literary prose does not increase reply odds and often signals desperation or social awkwardness.",
      "The Lethal Impact of Physical Compliments: Senders who open with compliments about looks ('sexy', 'beautiful', 'hot') receive significantly below-average response rates. Compliments on appearance signal generic, low-effort lust.",
      "Spelling and Grammar as Fitness Filters: Netspeak and phonetic shortcuts ('ur', 'wat', 'wanna', 'luv') inflict a severe penalty of over 30% on reply rates. Correct grammar, punctuation, and specific vocabulary act as instant cognitive status markers."
    ],
    "coreMechanics": [
      "Expected Return on Courtship Time: Calculating the optimal communication strategy by multiplying conversion rate by time-cost per action. High-volume template messaging dominates personalized crafting in raw volume.",
      "Linguistic Specificity Premium: Words referencing shared subcultural passions ('vegetarian', 'zombies', specific obscure indie bands) outperform generic flattery by orders of magnitude."
    ],
    "keyExercises": [
      "High-Yield Opener Blueprint: Craft a concise (40\u201360 word) message referencing a specific niche curiosity or mutual passion from the profile, maintaining proper grammar and zero physical compliments."
    ],
    "keyTakeaway": "In digital outreach, long bespoke essays are economically irrational: keep openers brief, grammatically crisp, specific to mutual interests, and completely devoid of superficial appearance compliments."
  },
  {
    "id": "ch4",
    "chapterNumber": 4,
    "title": "You Gotta Be the Glue",
    "bigIdea": "Social graph topology reveals romantic persistence: a lasting relationship is not defined by 'embeddedness' (sheer mutual friends), but by 'dispersion'\u2014acting as the structural bridge that binds previously disconnected social universes.",
    "counterIntuitiveInsights": [
      "Embeddedness does NOT predict romantic longevity: Having hundreds of mutual friends does not mean a couple will stay together; it usually just indicates they belong to the same college dorm, company, or clique.",
      "Dispersion is the True Predictor: Backstrom and Kleinberg's analysis of 1.3 million Facebook couples proved that relationships with high dispersion\u2014where mutual friends are unconnected to one another\u2014are significantly more durable.",
      "The Partner as the Structural Bridge: In high-dispersion couples, the partner connects isolated clusters: your childhood hometown friends, your college roommates, your work colleagues, and your family. The partner is the 'glue' holding separate worlds together.",
      "Triadic Closure in Romance: While social networks naturally close triads (if A knows B and A knows C, B and C tend to meet), lasting romantic relationships exist at the nexus of distinct, non-closed triangles."
    ],
    "coreMechanics": [
      "Dispersion Metric (Backstrom & Kleinberg): The recursive measure of how poorly connected mutual friends of two individuals are to one another outside of the two individuals.",
      "Graph Clustering Coefficient: The degree to which nodes in a graph tend to cluster together into tight cliques versus spanning structural holes."
    ],
    "keyExercises": [
      "Network Dispersion Audit: Map your significant other's connections to your social circles. If your mutual connections span multiple independent clusters of your life rather than one dense circle, your structural bond is robust."
    ],
    "keyTakeaway": "A lasting partner is not just another face in your existing social circle; they are the bridge that connects the disparate, otherwise isolated chapters of your life."
  },
  {
    "id": "ch5",
    "chapterNumber": 5,
    "title": "There\u2019s No Success Like Failure",
    "bigIdea": "Digital algorithms do not merely reflect human compatibility\u2014they manufacture it. Self-fulfilling algorithmic prophecies and behavioral experiments demonstrate that superficial filters blind us to real-world chemistry.",
    "counterIntuitiveInsights": [
      "Attractiveness Disparities Don't Ruin Blind Dates: In OkCupid's Crazy Blind Date app experiment, differences in physical attractiveness between partners had virtually zero correlation with how much users enjoyed the date in person.",
      "Algorithmic Labels Manufacture Reality: When OkCupid experimentally mislabeled users as 90% matches when they were actually 30% matches, users messaged more frequently, stayed in conversation longer, and rated each other higher, behaving as if they were true soulmates.",
      "The Tragedy of Superficial Pre-Selection: Users reject countless potential partners online over arbitrary criteria (height, smoking, income, education, zodiac) that have negligible impact on real-world face-to-face chemistry.",
      "The Fragility of Algorithmic Authority: When platforms present an objective-looking score, users outsource their judgment, proving that perceived algorithmic compatibility becomes behavioral fact."
    ],
    "coreMechanics": [
      "Algorithmic Placebo Effect: The psychological phenomenon where revealing a high compatibility score induces confirmation bias, leading participants to overlook flaws and emphasize commonalities.",
      "Crazy Blind Date Metric: Post-date user ratings collected in the real world measuring interpersonal enjoyment against platform-recorded profile attributes."
    ],
    "keyExercises": [
      "Filter Deconstruction Drill: Temporarily disable strict search filters for height, age brackets, or specific demographic checklists for 30 days to observe if real conversation chemistry defies your stated boundaries."
    ],
    "keyTakeaway": "Algorithms create the compatibility they claim to discover; when people believe an algorithm has matched them, they will bend their behavior to fulfill the prophecy."
  },
  {
    "id": "ch6",
    "chapterNumber": 6,
    "title": "The Confounding Factor",
    "bigIdea": "Big data reveals an enormous chasm between stated racial tolerance and revealed interpersonal bias: despite universal claims of open-mindedness, digital mating data shows systemic, pervasive racial hierarchies.",
    "counterIntuitiveInsights": [
      "Stated Tolerance vs. Revealed Bias: Over 80% of young, college-educated online daters state they have no racial preference, yet transaction matrices reveal deep racial segregation and discrimination in practice.",
      "The Acute Penalty for Asian Men and Black Women: Across hundreds of millions of interactions on OkCupid and Match.com, Black women and Asian men face the steepest statistical penalties in ratings and inbound messages from all demographic groups.",
      "The Universal Whiteness Premium: Across every racial demographic, adding 'white' to a multiracial background increases ratings and messages, while being Black costs an individual roughly three-quarters of a star in baseline attractiveness.",
      "Racial Bias is Cultural, Not Visual: Osagie K. Obasogie\u2019s research with people blind from birth demonstrated that blind individuals harbor the exact same racial preferences and stereotypes as sighted people, proving racial bias is socially absorbed rather than visually triggered."
    ],
    "coreMechanics": [
      "Interaction Matrices: Normalized cross-tabulations measuring per-capita ratings and reply rates between racial demographics, controlling for confounding variables like income and education.",
      "Audit Study Methodology in Big Data: Analyzing real-time behavioral telemetry at scale without participant awareness, bypassing the Hawthorne effect and social desirability bias."
    ],
    "keyExercises": [
      "Implicit Preference Audit: Compare your stated values with your revealed consumption or hiring history to identify where unconscious cultural scripts override conscious egalitarianism."
    ],
    "keyTakeaway": "Big data acts as an unsparing mirror: beneath a veneer of stated progressive tolerance lies an entrenched, culturally conditioned racial hierarchy."
  },
  {
    "id": "ch7",
    "chapterNumber": 7,
    "title": "The Beauty Myth in Apotheosis",
    "bigIdea": "Screen-mediated interaction hyper-charges the Halo Effect: physical attractiveness does not merely influence romantic desire\u2014it completely dictates the perception of an individual's intelligence, character, and wit.",
    "counterIntuitiveInsights": [
      "The Photo Accounts for Personality Ratings: When OkCupid isolated photo ratings from essay ratings, profiles with 5-star photos were rated as witty, brilliant, and charming\u2014even when the essays were completely bland. The exact same text paired with a 2-star photo was rated as boring or dumb.",
      "The Extreme Winner-Take-All Power Law: The top 5% of physically attractive profiles siphon off the vast majority of all incoming platform messages, creating a hyper-skewed attention economy where average profiles are rendered virtually invisible.",
      "Women\u2019s Asymmetrical Rating Curve: While men rate female attractiveness on a symmetrical bell curve around average, women rate 80% of men as 'below average' in physical attractiveness\u2014yet women are far more willing than men to message people they rated low.",
      "Digital Amplification of the Halo Effect: Screen interfaces compress human identity into a photo thumbnail, intensifying Dion, Berscheid, and Walster\u2019s classic 'What is Beautiful is Good' bias beyond anything observed in face-to-face psychology."
    ],
    "coreMechanics": [
      "Power-Law Attention Distribution: A non-linear distribution where inbound volume concentrates overwhelmingly in the extreme upper percentile of physical ratings.",
      "Halo Effect Coefficient: The statistical weight of visual attractiveness in predicting evaluations of non-physical traits (humor, competence, trustworthiness)."
    ],
    "keyExercises": [
      "Text-First Evaluation Drill: In recruitment or social evaluations, blind all photos and demographic identifiers to evaluate substantive competence and writing quality in total isolation."
    ],
    "keyTakeaway": "On screen, a photo is not worth a thousand words\u2014it makes words completely irrelevant by overwriting the viewer's perception of your mind with their perception of your face."
  },
  {
    "id": "ch8",
    "chapterNumber": 8,
    "title": "It\u2019s What\u2019s Inside That Counts",
    "bigIdea": "When visual identity is stripped away, human connection deepens instantly, but visual reality immediately crushes it when restored; similarly, private search queries reveal dark societal truths that polling surveys whitewash.",
    "counterIntuitiveInsights": [
      "The 7-Hour Blind Experiment: When OkCupid removed all profile photos for 'Love is Blind Day' (July 20, 2013), first-message reply rates surged by 44% and conversations grew deeper and more substantive.",
      "The Brutal Return of Sight: At 4:00 PM, when photos were restored, active conversations with users revealed to be below average in looks evaporated almost instantly, showing that superficial desire reasserts absolute dominance the moment eyes open.",
      "Google Searches as Digital Truth Serum: Seth Stephens-Davidowitz proved that search volume for racial slurs spiked massively on Obama's 2008 election night, directly exposing the myth of a post-racial America.",
      "The 3-to-5 Point Obama Racial Penalty: Stephens-Davidowitz calculated that racial animus cost Barack Obama 3 to 5 percentage points of the national popular vote in both 2008 and 2012, an effect invisible in traditional telephone polls due to Bradley/social desirability effects."
    ],
    "coreMechanics": [
      "Stated vs. Revealed Preference Discrepancy: The mathematical variance between what subjects tell survey pollsters and what their unmonitored digital search/click streams reveal.",
      "Lee Atwater\u2019s Coded Strategy: The documented evolution from explicit slurs in 1954 to abstract economic dog-whistles by 1968, which search data tracks with clinical precision."
    ],
    "keyExercises": [
      "Blind Interaction Test: Test candidate assessments or client inquiries by eliminating avatars, headshots, and names to observe the immediate shift in objective responsiveness."
    ],
    "keyTakeaway": "People don't lie to Google's search box: private search logs expose the bigotry, insecurities, and superficiality that social desirability systematically hides from public polls."
  },
  {
    "id": "ch9",
    "chapterNumber": 9,
    "title": "Days of Rage",
    "bigIdea": "Social networks are optimized for moral outrage: anger is the most viral emotion online, transforming minor missteps into global rituals of public destruction and accelerating political tribalism.",
    "counterIntuitiveInsights": [
      "Anger Spreads Faster Than Any Emotion: Beihang University\u2019s study of 70 million social media posts proved that anger travels faster and across looser social ties than joy, sadness, or disgust, making viral outrage the natural equilibrium of social algorithms.",
      "The Global Stoning of Justine Sacco: PR director Justine Sacco tweeted a clumsy joke before an 11-hour flight to Africa; by the time her plane touched down, #HasJustineLandedYet was the #1 worldwide trend, an angry mob had tracked her hotel, and she was fired before landing.",
      "The De-Contextualization Engine: Social media algorithms strip irony, intent, and personal context from statements (e.g., Safiyyah Nawaz's 16,000-retweet Earth age joke), feeding them to outrage mobs across three continents.",
      "The 1950 APSA Inversion: In 1950, the American Political Science Association famously complained that Democrats and Republicans were too similar and urged more partisan conflict; social algorithms fulfilled this wish to a catastrophic, hyper-polarized extreme."
    ],
    "coreMechanics": [
      "Emotional Contagion Network Topology: The mathematical diffusion rate of emotional sentiment across social graphs, showing anger as a high-virality, low-friction vector.",
      "The Digital Panoptic Mob: The spontaneous aggregation of millions of geographically dispersed users executing decentralized public punishment via retweet metrics."
    ],
    "keyExercises": [
      "The 24-Hour Outrage Cooldown: Whenever an online post provokes visceral indignation, implement an absolute 24-hour moratorium on reposting, commenting, or sharing to starve the rage algorithm."
    ],
    "keyTakeaway": "Anger is the crack cocaine of social networks: it spreads faster than joy or reason, weaponizing digital crowds into global lynch mobs over 140-character misunderstandings."
  },
  {
    "id": "ch10",
    "chapterNumber": 10,
    "title": "The Digital Footprint",
    "bigIdea": "Textual analysis of millions of digital profiles and search records exposes how demographic tribes actually speak and identify, stripping away stereotypes to reveal the authentic linguistic fingerprints of race, gender, and age.",
    "counterIntuitiveInsights": [
      "Distinctive Vocabulary Over Common Words: Using term frequency-inverse document frequency (tf-idf), Rudder isolates the words that uniquely characterize demographics: white men talk about 'hunting' and 'craft beer'; Black men highlight 'soul food' and 'god-fearing'; Asian men distinctively write 'tall for an Asian' and 'coding'.",
      "The Subconscious Cultural Shorthand: Profile essays serve as modern college application essays\u2014aspirational self-portraits where users inadvertently reveal their cultural tribes through idiosyncratic pop culture and culinary references.",
      "Search Data as Demographic Map: Seth Stephens-Davidowitz\u2019s research shows that search data maps regional and cultural divides with vastly superior resolution than census surveys, pinpointing local neuroses and desires.",
      "The Mirage of Homogeneity: Big data reveals that while broad demographic categories share statistical vocabulary signatures, individuals within those groups exhibit vast, porous boundaries that defy monolithic political assumptions."
    ],
    "coreMechanics": [
      "TF-IDF (Term Frequency-Inverse Document Frequency): A mathematical weighting factor reflecting how important a word is to a specific document or subpopulation relative to the entire corpus.",
      "Linguistic Distance Metric: Calculating the cosine similarity between word vectors of different demographic cohorts to measure cultural proximity."
    ],
    "keyExercises": [
      "Vocabulary Profiling Analysis: Run your written self-descriptions or marketing copy through a word-frequency counter to see which subconscious tribal keywords you lean on."
    ],
    "keyTakeaway": "Every word you write online leaves an indelible linguistic footprint that algorithms can match to your age, race, and subculture with mathematical certainty."
  },
  {
    "id": "ch11",
    "chapterNumber": 11,
    "title": "The Mathematics of Identity",
    "bigIdea": "Machine learning algorithms can deduce your deepest secrets\u2014including sexual orientation, drug use, and intelligence\u2014from trivial, seemingly unrelated digital breadcrumbs like Facebook likes and friend networks.",
    "counterIntuitiveInsights": [
      "The MIT 'Gaydar' via Network Topology: In 2009, MIT students Carter Jernigan and Behram Mistree created software that predicted male homosexuality with 78% accuracy purely by analyzing the gender and sexuality of Facebook friends\u2014without reading a single word of profile content.",
      "Facebook Likes Predict Sensitive Traits: Cambridge University researchers (Kosinski, Stillwell, Graepel) proved that innocuous Facebook likes predict male homosexuality (88% accuracy), African American vs. Caucasian ethnicity (95%), and political party (85%).",
      "The 'Curly Fries' IQ Correlation: High intelligence on Facebook correlated strongly with liking 'Curly Fries' and 'Morgan Freeman\u2019s Voice'. There is no biological link between potatoes and IQ; the like spread virally through high-IQ friend networks, turning an absurd preference into an accurate psychometric signal.",
      "Geographic Invariance of the Closet: The search query 'Is my husband gay?' is the #1 search following 'Is my husband...' in the US, and it is searched at identical rates in deeply homophobic states (Mississippi, Louisiana) as in liberal states, proving the gay population is constant everywhere (~5%) and homophobia merely forces thousands into closeted heterosexual marriages."
    ],
    "coreMechanics": [
      "Homophilic Network Diffusion: The principle that individuals connect to similar peers, allowing algorithms to infer an individual\u2019s hidden traits from the known attributes of their social cluster.",
      "Singular Value Decomposition (SVD) on Behavioral Matrices: Mathematical dimension reduction applied to user-like matrices to extract latent psychographic and demographic dimensions."
    ],
    "keyExercises": [
      "Digital Trail Audit: Review your public social media likes and follows. Realize that machine learning models can infer your voting habits, sexual orientation, and psychological stability from entirely harmless consumer brands."
    ],
    "keyTakeaway": "You cannot hide in the closet from linear algebra: your friends and harmless digital 'likes' out your sexual orientation, IQ, and political beliefs without your consent."
  },
  {
    "id": "ch12",
    "chapterNumber": 12,
    "title": "Epilogue / The Panopticon",
    "bigIdea": "Modern data surveillance has built a digital Panopticon where corporations and governments monitor every move, while citizens willingly surrender their privacy in exchange for minor algorithmic conveniences.",
    "counterIntuitiveInsights": [
      "Target's Pregnancy Predictor: Target data scientist Andrew Pole identified 25 specific consumer products (such as unscented lotion, magnesium, calcium) that allowed Target to calculate a 'pregnancy prediction score' and estimate due dates within weeks, famously notifying a father that his teenage daughter was pregnant before she did.",
      "The Privacy Paradox: In surveys, over 80% of citizens claim deep concern over digital privacy, yet their revealed behavior is completely blas\u00e9: they readily trade their geolocation, contacts, and browsing telemetry for free apps and coupon discounts.",
      "Bentham's Panopticon Brought to Life: The architectural prison designed by Jeremy Bentham in 1791\u2014where inmates never know when the guard is watching, forcing them to police themselves\u2014has been realized at planetary scale through NSA PRISM, smartphone tracking, and data brokers.",
      "Edward Tufte\u2019s Humanistic Data Ethos: Rudder closes by invoking statistician Edward Tufte and the Vietnam Veterans Memorial: the ultimate purpose of big data is not reductive corporate surveillance, but revealing the distinct, sacred human lives within the aggregate gray blur."
    ],
    "coreMechanics": [
      "Predictive Consumer Telemetry: Aggregating disparate transaction logs (credit cards, loyalty cards, web histories) into predictive models that anticipate intimate life-stage transitions.",
      "The Panoptic Surveillance Equilibrium: A socio-technical state where the constant, invisible potential of being monitored enforces behavioral conformity."
    ],
    "keyExercises": [
      "Data Footprint Cleanse: Audit app permissions on your mobile devices; disable background location tracking, microphone access, and ad-tracking IDs to disrupt automated telemetry profiling."
    ],
    "keyTakeaway": "We have voluntarily built Bentham's Panopticon around ourselves, trading intimate personal sovereignty for free convenience while corporate algorithms predict our most private life events."
  }
];

const DEFAULT_DATACYCLISM_QUESTIONS = [
  {
    "id": "data-q01",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Wooderson\u2019s Law",
    "difficulty": "hard",
    "type": "concept",
    "question": "What fundamental asymmetry between male and female attraction patterns did Christian Rudder discover when analyzing millions of ratings on OkCupid (termed 'Wooderson\u2019s Law')?",
    "options": [
      "Men's attraction curve rises continuously until age 40, reflecting evolutionary preferences for experienced partners.",
      "Men of all ages (from 20 to 50) consistently rate women aged 20 to 22 as the most physically attractive, creating a flat plateau across four decades.",
      "Men's preferred age dynamically scales alongside their own chronological age along the age-parity line.",
      "Men prefer partners who are strictly 5 years younger than themselves at every stage of adulthood."
    ],
    "correctAnswer": 1,
    "explanation": "Named after Matthew McConaughey\u2019s character David Wooderson in Dazed and Confused ('I get older, they stay the same age'), Wooderson\u2019s Law describes how male sexual aims are an independent variable from a man's chronological age. Whether a man is 20, 35, or 50, his ratings of female physical attractiveness peak sharply and remain frozen at ages 20 to 22.",
    "citation": "Chapter 1: Wooderson\u2019s Law - Independent Variables"
  },
  {
    "id": "data-q02",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Wooderson\u2019s Law",
    "difficulty": "hard",
    "type": "concept",
    "question": "How do women's age-based attraction patterns contrast with men's when evaluated against the 'age-parity diagonal'?",
    "options": [
      "Women also prefer 20- to 22-year-old men, mirroring male youth bias.",
      "Women's preference is completely random, showing no statistical correlation with partner age.",
      "Women's attraction closely follows the 'age-parity diagonal', where their preferred male age scales upward roughly in tandem with their own age.",
      "Women consistently prefer men who are at least 15 to 20 years older than themselves across their entire lifespan."
    ],
    "correctAnswer": 2,
    "explanation": "Unlike men's flat 20-to-22 plateau, women's attraction curve runs parallel to the age-parity line (where male and female ages are equal). A 20-year-old woman prefers 23-year-old men; a 30-year-old woman prefers 30-year-olds; and a 40-year-old woman prefers men around 38\u201340. Women's sexual desire dynamically matures as they grow older.",
    "citation": "Chapter 1: Wooderson\u2019s Law - The Age Parity Line"
  },
  {
    "id": "data-q03",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Wooderson\u2019s Law",
    "difficulty": "medium",
    "type": "concept",
    "question": "What discrepancy exists between older men's stated age preferences in search filters versus their revealed preferences in messaging behavior?",
    "options": [
      "Older men state they only want 20-year-olds in their search filters, but in private ratings they vote for women in their 40s.",
      "Older men state and reveal identical age preferences, showing no divergence between survey filters and messaging clicks.",
      "Older men filter exclusively for women with advanced graduate degrees, ignoring physical age.",
      "Older men set search filters for age-appropriate women (e.g. 35\u201345) to appear socially normative, yet their actual rating and messaging behavior heavily targets women aged 20\u201322."
    ],
    "correctAnswer": 3,
    "explanation": "Stated preferences diverge sharply from revealed preferences. In their public profile settings and search filters, older men (e.g. age 45) specify socially acceptable age brackets (such as 35\u201348) to avoid appearing predatory. However, OkCupid's uninhibited rating and messaging data reveals that their unsolicited contacts overwhelmingly target women in their early twenties.",
    "citation": "Chapter 1: Wooderson\u2019s Law - Stated vs. Revealed Preference"
  },
  {
    "id": "data-q04",
    "chapterId": "ch1",
    "chapterName": "Ch 1: Wooderson\u2019s Law",
    "difficulty": "hard",
    "type": "concept",
    "question": "According to US Census demographics and OkCupid pursuit data, what severe 'demographic cliff' do women face as they age compared to men?",
    "options": [
      "For every 100 men looking for a 20-year-old woman, only 9 are looking for a 50-year-old woman, creating a 91% collapse in male pursuit.",
      "As women age, the ratio of single men to single women increases exponentially due to higher male longevity.",
      "Older women receive more messages per capita than 20-year-old women because older men outnumber younger men on dating sites.",
      "The supply of available suitors for women remains steady until age 65 due to universal serial monogamy."
    ],
    "correctAnswer": 0,
    "explanation": "Because men die earlier than women and men of all ages compete for women in their early twenties, women face a brutal demographic crunch. Census data shows single men outnumber women in youth (10 million single men ages 20\u201324 vs. 5 million by age 50). Comparing areas of interest, for every 100 men pursuing a 20-year-old, only 9 are seeking a woman 30 years older\u2014a 91% loss of potential suitors.",
    "citation": "Chapter 1: Wooderson\u2019s Law - The Demographic Cliff"
  },
  {
    "id": "data-q05",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Death by a Thousand Mehs",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does a woman with a high-variance rating distribution (many 1s and many 5s) receive significantly more inbound messages than a woman with a consensus 4-star rating?",
    "options": [
      "High variance in attractiveness ratings reduces messaging volume because consensus agreement is required for suitors to feel confident.",
      "A profile with high rating variance (many 1s and many 5s) receives substantially more messages than a profile with low variance (consensus 3s and 4s), even with the same average score.",
      "Average attractiveness is the sole mathematical determinant of inbound messages, with variance exerting zero statistical impact.",
      "Profiles that receive 1-star ratings are automatically demoted by OkCupid's recommendation engine, starving them of inbound messages."
    ],
    "correctAnswer": 1,
    "explanation": "In Rudder's mathematical model, variance trumps the mean. A woman who polarizes men (generating enthusiastic 5-star ratings alongside hostile 1-star ratings) receives up to three times more messages than a woman whose votes cluster at a consensus 3.5 or 4 stars ('consensus cute'). The negative votes paradoxically drive engagement from the passionate subset.",
    "citation": "Chapter 2: Death by a Thousand Mehs - The Power of Variance"
  },
  {
    "id": "data-q06",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Death by a Thousand Mehs",
    "difficulty": "hard",
    "type": "concept",
    "question": "From a game-theoretic perspective, why are men more motivated to send messages to polarizing women than to universally attractive women?",
    "options": [
      "Suitors only message people they consider consensus 10s because the prestige of rejection is zero.",
      "Suitors prefer consensus-attractive people because they assume other men are too intimidated to send messages.",
      "A suitor pursuing a polarizing woman calculates that other men will be repelled by her unconventional look, reducing his competition and increasing his odds of a reply.",
      "Suitors assume polarizing women have lower standards and are desperate for any social contact."
    ],
    "correctAnswer": 2,
    "explanation": "When a man encounters a universally attractive woman, he assumes hundreds of rival men are flooding her inbox, making his individual chance of a reply negligible. However, when he is attracted to a polarizing woman (e.g. someone with prominent tattoos or eccentric style), he assumes most other men will give her 1 star and pass. This perceived lack of competition gives him the confidence to initiate contact.",
    "citation": "Chapter 2: Death by a Thousand Mehs - Game Theory of Competition"
  },
  {
    "id": "data-q07",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Death by a Thousand Mehs",
    "difficulty": "medium",
    "type": "scenario",
    "question": "A user on a dating app has an unconventional physical trait (such as bold sleeve tattoos, a shaved head, or quirky fashion). According to Rudder's variance analysis, what photo strategy should they follow?",
    "options": [
      "Accentuate distinctive, unconventional traits rather than airbrushing them, because polarizing opinions drives active messaging from enthusiasts.",
      "Photoshop away all distinguishing features to achieve a bland, universally acceptable look that minimizes 1-star votes.",
      "Avoid smiling and look away from the camera to simulate aloofness, which guarantees higher mean ratings.",
      "Post only group photos with more attractive friends to benefit from the cheerleader effect."
    ],
    "correctAnswer": 0,
    "explanation": "Rudder advises users to lean into their idiosyncrasies rather than hide them. Airbrushing away unconventional traits produces 'a thousand mehs'\u2014mild, indifferent approval that yields zero messages. Showcasing distinctive features repels people who wouldn't be compatible anyway, while igniting the passionate enthusiasm of suitors who specifically prize that look.",
    "citation": "Chapter 2: Death by a Thousand Mehs - Accentuate the Negative"
  },
  {
    "id": "data-q08",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Death by a Thousand Mehs",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why does Christian Rudder use cult film director John Waters (director of Pink Flamingos) to illustrate the mathematical dynamics of online dating?",
    "options": [
      "Creating art or profiles that appeal to broad mainstream audiences maximizes long-term engagement.",
      "Polarizing content only succeeds in avant-garde film and completely fails when applied to consumer dating platforms.",
      "The most successful internet creators are those who eliminate all negative feedback through algorithmic moderation.",
      "Repelling large segments of the mainstream is the mathematical prerequisite for cultivating intensely passionate, committed devotees."
    ],
    "correctAnswer": 3,
    "explanation": "John Waters' cult films deliberately disgust and offend mainstream viewers, but that exact repulsion binds his loyal fan base into fervent, lifelong devotees. In OkCupid's data, this exact dynamic plays out in romantic attraction: you cannot generate intense adoration without being willing to evoke equally intense rejection.",
    "citation": "Chapter 2: Death by a Thousand Mehs - The John Waters Effect"
  },
  {
    "id": "data-q09",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Writing on the Wall",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does sending copy-pasted introductory messages dominate bespoke, from-scratch messages in economic efficiency per unit of time?",
    "options": [
      "Writing custom messages yields a 400% higher reply rate, making copy-pasting an irrational waste of time.",
      "Copy-pasting template messages yields only a ~25% lower reply rate than bespoke messages, but takes a fraction of the time, resulting in far more total replies per hour of effort.",
      "OkCupid's anti-spam algorithms immediately shadowban accounts that send identical messages to multiple users.",
      "Bespoke messages take less time to compose than copy-pasting because modern auto-complete tools automate personalization."
    ],
    "correctAnswer": 1,
    "explanation": "OkCupid's linguistic data revealed that copy-and-paste openers underperform personalized messages by only roughly 25% (e.g. ~22% reply rate vs. ~30%). However, crafting a bespoke message takes 5 to 10 minutes, whereas copy-pasting takes 10 seconds. In terms of return on investment (replies generated per hour of effort), copy-pasters outperform bespoke writers by an order of magnitude.",
    "citation": "Chapter 3: Writing on the Wall - The Copy-Paste Efficiency Paradox"
  },
  {
    "id": "data-q10",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Writing on the Wall",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the relationship between introductory message length and response rate on OkCupid?",
    "options": [
      "Reply rates scale linearly with word count, rewarding users who write comprehensive multi-paragraph introductory essays.",
      "Messages under 50 characters are completely ignored because they fail to convey serious romantic intent.",
      "The optimal message length is between 500 and 800 words, demonstrating emotional investment.",
      "The average message is around 100 characters; response rates peak at short-to-medium lengths (~40\u201360 words) and plateau or drop for long essays."
    ],
    "correctAnswer": 3,
    "explanation": "The average message on OkCupid is roughly 100 characters (Twitter-length). Data shows that response rates plateau very early: beyond a brief, punchy note of about 40 to 60 words (100\u2013200 characters), adding more words yields diminishing returns and eventually causes reply rates to decline, as long essays can appear desperate or demanding.",
    "citation": "Chapter 3: Writing on the Wall - Message Length and Adaptation"
  },
  {
    "id": "data-q11",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Writing on the Wall",
    "difficulty": "hard",
    "type": "concept",
    "question": "What empirical effect do physical compliments (e.g., 'sexy', 'beautiful', 'hot') have when used by men in initial messages to women?",
    "options": [
      "Words praising physical appearance ('sexy', 'beautiful', 'hot') significantly suppress reply rates, performing worse than average openers.",
      "Complimenting physical appearance is the single most effective strategy for men messaging women, doubling response rates.",
      "Physical flattery has no measurable impact on reply rates across all age brackets.",
      "Compliments only work if accompanied by specific numerical ratings of the recipient's photos."
    ],
    "correctAnswer": 0,
    "explanation": "Complimenting a woman's physical appearance in an initial message is statistically counter-productive. Words like 'sexy', 'hot', 'gorgeous', and 'beautiful' result in reply rates that fall well below site averages. In contrast, referencing specific shared passions or lifestyle quirks ('vegetarian', 'zombie', niche bands) dramatically increases response rates.",
    "citation": "Chapter 3: Writing on the Wall - The Compliment Penalty"
  },
  {
    "id": "data-q12",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Writing on the Wall",
    "difficulty": "medium",
    "type": "concept",
    "question": "What did OkCupid's linguistic analysis reveal about the impact of netspeak abbreviations ('ur', 'wat', 'wanna') on message reply rates?",
    "options": [
      "Casual netspeak ('u', 'ur', 'wanna') increases reply rates by 25% because it conveys relaxed, approachable confidence.",
      "Spelling and punctuation have zero measurable correlation with reply rates on modern digital dating apps.",
      "Netspeak and phonetic shortcuts inflict a severe penalty exceeding 30% on reply rates, while correct grammar and punctuation act as positive fitness filters.",
      "Using complex academic jargon is the only way to achieve a response rate above 50%."
    ],
    "correctAnswer": 2,
    "explanation": "Phonetic shortcuts and careless netspeak ('ur', 'u', 'wat', 'wanna', 'luv') devastate reply rates by more than 30%. Senders who write with proper punctuation, accurate apostrophes, and correct spelling achieve significantly higher reply rates, demonstrating that basic literacy operates as an immediate unconscious fitness filter in courtship.",
    "citation": "Chapter 3: Writing on the Wall - Grammar and Fitness Filters"
  },
  {
    "id": "data-q13",
    "chapterId": "ch4",
    "chapterName": "Ch 4: You Gotta Be the Glue",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Backstrom and Kleinberg's 2013 Cornell/Facebook study of 1.3 million couples, why did social graph 'embeddedness' fail to predict relationship survival?",
    "options": [
      "High embeddedness (sharing hundreds of mutual friends) is the single strongest statistical predictor that a romantic couple will stay together.",
      "Couples with zero mutual friends have the lowest divorce rates because their lives remain completely independent.",
      "Embeddedness merely reflects belonging to the same social clique; dispersion\u2014where mutual friends are unconnected to one another\u2014is the true predictor of relationship longevity.",
      "Backstrom and Kleinberg discovered that Facebook network structure has no predictive power regarding relationship status."
    ],
    "correctAnswer": 2,
    "explanation": "Embeddedness simply measures the sheer volume of mutual friends shared by two people. High embeddedness frequently occurs when two people belong to the same college dorm, fraternity, church, or corporate department\u2014which reflects situational proximity rather than romantic depth. It failed to differentiate between platonic coworkers and committed couples.",
    "citation": "Chapter 4: You Gotta Be the Glue - Embeddedness vs. Dispersion"
  },
  {
    "id": "data-q14",
    "chapterId": "ch4",
    "chapterName": "Ch 4: You Gotta Be the Glue",
    "difficulty": "hard",
    "type": "concept",
    "question": "How is 'dispersion' mathematically defined in social network analysis, and why does it identify lasting romantic relationships?",
    "options": [
      "The mutual friends shared by a couple come from distinct, non-overlapping social clusters (e.g., childhood, college, work), with the couple acting as the sole bridge connecting them.",
      "The degree to which a couple unfriends their mutual contacts to preserve intimacy within the relationship.",
      "The total geographic distance separating all members of a user's friend list.",
      "The number of times a couple posts joint photographs across different social media platforms."
    ],
    "correctAnswer": 0,
    "explanation": "Dispersion measures the extent to which two people's mutual friends are NOT connected to each other. In high-dispersion relationships, Person A and Person B share mutual friends across separate facets of life (e.g. hometown friends, college buddies, coworkers), and the couple itself forms the sole bridge connecting these clusters. This bridging indicates that the partners have integrated each other into their entire lives.",
    "citation": "Chapter 4: You Gotta Be the Glue - The Dispersion Metric"
  },
  {
    "id": "data-q15",
    "chapterId": "ch4",
    "chapterName": "Ch 4: You Gotta Be the Glue",
    "difficulty": "medium",
    "type": "scenario",
    "question": "A network scientist analyzes two couples on Facebook. Couple A shares 50 mutual friends, all within one tight local fraternity/sorority circle. Couple B shares 20 mutual friends drawn from 5 distinct, unconnected life phases. Which couple is statistically far more likely to stay together?",
    "options": [
      "Couple A, who shares 60 mutual friends all belonging to the same tight-knit local fraternity, is far more likely to stay together than Couple B.",
      "Couple B, whose mutual friends span unconnected clusters (such as hometown friends, college roommates, and coworkers), is statistically far more likely to remain together than Couple A.",
      "Both couples have identical survival probabilities because social graph metrics only reflect offline proximity.",
      "Couple A will stay together because high clustering coefficients protect romantic couples from outside interference."
    ],
    "correctAnswer": 1,
    "explanation": "Couple B exhibits high dispersion: their mutual friends span multiple disconnected chapters of their lives, and the romantic relationship serves as the critical connective tissue. Couple A merely exhibits high embeddedness within a single dense clique, which often dissolves when social affiliations change.",
    "citation": "Chapter 4: You Gotta Be the Glue - Structural Longevity"
  },
  {
    "id": "data-q16",
    "chapterId": "ch4",
    "chapterName": "Ch 4: You Gotta Be the Glue",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the structural meaning of Christian Rudder's chapter title 'You Gotta Be the Glue' in network topology?",
    "options": [
      "The glue represents the algorithmic matching score that OkCupid uses to force users into high-retention cohorts.",
      "The glue refers to shared financial assets that prevent couples from separating during economic downturns.",
      "The glue refers to triadic closure where every friend of Partner A becomes a close friend of Partner B.",
      "The romantic partner acts as the essential structural bridge holding together the otherwise isolated, disparate social worlds of an individual's life."
    ],
    "correctAnswer": 3,
    "explanation": "In network graph terms, lasting romantic partners are 'the glue' because they span structural holes. They connect separate clusters of a person's universe\u2014hometown friends, college friends, workplace colleagues, and family\u2014that would otherwise remain completely isolated components in the graph.",
    "citation": "Chapter 4: You Gotta Be the Glue - Spanning Structural Holes"
  },
  {
    "id": "data-q17",
    "chapterId": "ch5",
    "chapterName": "Ch 5: There\u2019s No Success Like Failure",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did OkCupid discover about physical attractiveness and interpersonal chemistry in its 'Crazy Blind Date' mobile experiment?",
    "options": [
      "Disparities in physical attractiveness between matched individuals had virtually zero correlation with how much users enjoyed the real-life date.",
      "Dates where both partners were rated 5 stars had a 100% marriage rate, while mismatched dates resulted in walkouts.",
      "Users refused to meet in person unless the platform guaranteed their match was within 0.1 stars of their own rating.",
      "Women consistently rated blind dates poorly if their date was less than 6 feet tall, regardless of conversational chemistry."
    ],
    "correctAnswer": 0,
    "explanation": "In Crazy Blind Date, users were matched for blind drinks without seeing photos or full profiles. Post-date ratings showed that the relative difference in physical attractiveness between the two people had almost no correlation with how much they enjoyed the date. A 4-star person matched with a 2-star person rated the date just as highly as two equally rated individuals.",
    "citation": "Chapter 5: There\u2019s No Success Like Failure - Crazy Blind Date Findings"
  },
  {
    "id": "data-q18",
    "chapterId": "ch5",
    "chapterName": "Ch 5: There\u2019s No Success Like Failure",
    "difficulty": "hard",
    "type": "concept",
    "question": "What happened when OkCupid experimentally mislabeled users as 90% matches when their true algorithmic compatibility was only 30%?",
    "options": [
      "When users were told their match score was 30%, they worked twice as hard to prove the algorithm wrong, messaging at higher rates.",
      "Mislabeled match scores had zero effect on user communication, proving people rely solely on instinct.",
      "When OkCupid experimentally mislabeled 30% matches as 90% matches, users exchanged more messages and rated each other higher, living up to the false score.",
      "Users immediately detected false compatibility scores and reported the platform to consumer protection regulators."
    ],
    "correctAnswer": 2,
    "explanation": "The algorithmic score operated as a powerful self-fulfilling prophecy. When OkCupid told two incompatible people (30% true match) that they were a 90% match, they messaged each other at rates comparable to genuine 90% matches, exchanged more messages, and rated each other higher. The algorithmic label manufactured the compatibility.",
    "citation": "Chapter 5: There\u2019s No Success Like Failure - The Algorithmic Placebo"
  },
  {
    "id": "data-q19",
    "chapterId": "ch5",
    "chapterName": "Ch 5: There\u2019s No Success Like Failure",
    "difficulty": "medium",
    "type": "concept",
    "question": "How do search filters and categorical 'deal-breakers' on dating websites distort human mating behavior compared to in-person encounters?",
    "options": [
      "Stated deal-breakers (e.g., diet, height, astrological sign) perfectly predict face-to-face relationship satisfaction.",
      "Online search filters encourage users to reject countless potential partners over superficial checklist items that have negligible impact on real-world interpersonal happiness.",
      "Dating platforms intentionally remove search filters to prevent users from finding compatible partners too quickly.",
      "Eliminating categorical deal-breakers decreases marriage rates across all age cohorts."
    ],
    "correctAnswer": 1,
    "explanation": "Digital interfaces turn dating into a consumer shopping catalog where users filter out partners over minor categorical criteria (height, smoking, income, education, zodiac signs). Rudder demonstrates that these checklist items have almost no bearing on in-person chemistry, leading users to prematurely discard people they would genuinely like in real life.",
    "citation": "Chapter 5: There\u2019s No Success Like Failure - The Catalog Mentality"
  },
  {
    "id": "data-q20",
    "chapterId": "ch5",
    "chapterName": "Ch 5: There\u2019s No Success Like Failure",
    "difficulty": "hard",
    "type": "concept",
    "question": "What profound conclusion does Christian Rudder draw regarding the power of algorithms to shape social reality rather than merely record it?",
    "options": [
      "Platforms should randomly match users because objective mathematical compatibility is an empirical impossibility.",
      "Platforms have no ethical obligations to users because digital terms of service waive all psychological liability.",
      "Users should never be shown compatibility percentages under any circumstances.",
      "Algorithms do not simply discover human affinities; by displaying authoritative compatibility metrics, platforms actively shape human perception and behavior."
    ],
    "correctAnswer": 3,
    "explanation": "Algorithms are not passive diagnostic mirrors; they are active social intervention tools. By displaying an authoritative compatibility percentage, an algorithm primes users to overlook flaws, seek commonalities, and alter their communication, effectively manufacturing the social reality it purports to discover.",
    "citation": "Chapter 5: There\u2019s No Success Like Failure - Manufacturing Affinity"
  },
  {
    "id": "data-q21",
    "chapterId": "ch6",
    "chapterName": "Ch 6: The Confounding Factor",
    "difficulty": "hard",
    "type": "concept",
    "question": "What does big data reveal about stated racial open-mindedness versus revealed messaging behavior on dating platforms?",
    "options": [
      "Both stated preferences and revealed messaging behavior show zero racial bias among educated millennials.",
      "Over 80% of white users state they have no racial preference in dating, yet behavioral interaction matrices reveal massive penalties for Black women and Asian men.",
      "Stated preferences express extreme overt racism, while actual private messaging behavior shows complete racial egalitarianism.",
      "Black men receive the highest per capita inbound message volume from women of all racial backgrounds."
    ],
    "correctAnswer": 1,
    "explanation": "When polled in profile match questions, over 80% of OkCupid users claim they have no racial preference and would date someone of any race. However, behavioral matrices tracking hundreds of millions of actual votes and messages reveal pervasive racial segregation, with Black women and Asian men suffering massive statistical penalties across all demographic groups.",
    "citation": "Chapter 6: The Confounding Factor - Stated vs. Revealed Tolerance"
  },
  {
    "id": "data-q22",
    "chapterId": "ch6",
    "chapterName": "Ch 6: The Confounding Factor",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did Rudder discover when examining the star ratings of multiracial users on OkCupid?",
    "options": [
      "Adding white ancestry to a profile decreases ratings among white users due to preferences for exoticism.",
      "Multiracial profiles receive identical ratings regardless of which specific ancestral backgrounds are selected.",
      "Being identified as Black increases inbound messages by 15% due to affirmative social sorting.",
      "Across all demographic groups, adding 'white' to a multiracial background consistently boosts star ratings and inbound message volume."
    ],
    "correctAnswer": 3,
    "explanation": "Rudder analyzed users who selected multiple racial identities (e.g. Asian + White, Black + White, Latino + White). Across the board, adding 'White' to any racial makeup created a substantial, statistically universal boost in ratings and messages, demonstrating a powerful 'whiteness premium' that permeates the digital dating market.",
    "citation": "Chapter 6: The Confounding Factor - The Whiteness Premium"
  },
  {
    "id": "data-q23",
    "chapterId": "ch6",
    "chapterName": "Ch 6: The Confounding Factor",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did sociologist Osagie K. Obasogie discover in his research with individuals who were blind from birth, and what does it prove about implicit bias?",
    "options": [
      "People blind from birth hold the same racial stereotypes, visual preferences, and implicit biases as sighted individuals, proving racial bias is socially absorbed rather than visually driven.",
      "Blind individuals exhibit complete colorblindness in dating, showing zero racial preference or awareness.",
      "Blind individuals develop inverted racial preferences, favoring groups that sighted individuals penalize.",
      "Blind individuals refuse to categorize human beings by race because they lack the optical apparatus for facial recognition."
    ],
    "correctAnswer": 0,
    "explanation": "In Blind to Difference, Osagie K. Obasogie interviewed individuals who were totally blind from birth and found that they maintained the exact same racial stereotypes, hierarchies, and dating preferences as sighted people. This proves racial bias is not an involuntary physiological reaction to visual stimuli, but a deeply internalized cultural construct absorbed through social exposure.",
    "citation": "Chapter 6: The Confounding Factor - Blind to Difference"
  },
  {
    "id": "data-q24",
    "chapterId": "ch6",
    "chapterName": "Ch 6: The Confounding Factor",
    "difficulty": "medium",
    "type": "concept",
    "question": "When controlling for income, education, profile length, and attractiveness, what statistical penalty do Black women face on online dating platforms?",
    "options": [
      "Black women receive roughly 50% more messages than other women when controlling for education.",
      "Black women experience no penalty on dating sites that utilize photo-matching algorithms.",
      "Black women receive roughly 25% fewer first messages and their sent messages receive 25% fewer replies compared to other female demographics.",
      "Black women face penalties only from white men, while receiving universal top ratings from Latino and Asian men."
    ],
    "correctAnswer": 2,
    "explanation": "Even after controlling for confounding factors like age, education, and user attractiveness ratings, Black women face an acute demographic discount: they receive roughly 25% fewer initial messages from men than other women, and when they take the initiative to send a message, they receive roughly 25% fewer replies.",
    "citation": "Chapter 6: The Confounding Factor - Quantifying the Racial Penalty"
  },
  {
    "id": "data-q25",
    "chapterId": "ch7",
    "chapterName": "Ch 7: The Beauty Myth in Apotheosis",
    "difficulty": "hard",
    "type": "concept",
    "question": "What happened when OkCupid isolated photo ratings from essay ratings to test the Halo Effect in digital profiles?",
    "options": [
      "Users evaluate profile text independently from photos, accurately identifying great writing regardless of physical appearance.",
      "When a profile features a 5-star photo, users rate the accompanying text as brilliant and witty even if it is completely bland; the exact same text with a 2-star photo is rated as dull or weird.",
      "Profiles without photos receive higher character and intelligence ratings than profiles with attractive photos.",
      "Physical attractiveness negatively correlates with perceived intelligence in online dating environments."
    ],
    "correctAnswer": 1,
    "explanation": "The Halo Effect ('What is Beautiful is Good') is hyper-charged on screens. When OkCupid paired identical profile essays with different photos, a 5-star photo caused users to rate the writing as brilliant, witty, and charming. When the exact same text was paired with a 2-star photo, users judged the writing as boring, stupid, or strange. The photo overwhelmed text evaluation entirely.",
    "citation": "Chapter 7: The Beauty Myth in Apotheosis - The Halo Effect on Screen"
  },
  {
    "id": "data-q26",
    "chapterId": "ch7",
    "chapterName": "Ch 7: The Beauty Myth in Apotheosis",
    "difficulty": "hard",
    "type": "concept",
    "question": "What type of mathematical distribution characterizes the flow of incoming messages relative to physical attractiveness ratings on dating platforms?",
    "options": [
      "Inbound message volume follows a standard normal Gaussian distribution centered at average attractiveness.",
      "Less attractive profiles receive more messages because suitors assume they are more approachable.",
      "Attention follows an extreme power-law distribution where the top 5% of physically rated profiles capture an overwhelming share of all inbound messages.",
      "Dating algorithms redistribute messages evenly to ensure every active profile receives at least one message per week."
    ],
    "correctAnswer": 2,
    "explanation": "Message distribution does not resemble a gentle bell curve. It follows an extreme power-law curve: the top 5% of most attractive profiles siphon off the vast majority of all messages, creating a winner-take-all attention economy where average and below-average profiles receive virtually no organic inbound interest.",
    "citation": "Chapter 7: The Beauty Myth in Apotheosis - Power Law of Attention"
  },
  {
    "id": "data-q27",
    "chapterId": "ch7",
    "chapterName": "Ch 7: The Beauty Myth in Apotheosis",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does the distribution of female ratings of male looks compare to male ratings of female looks on OkCupid?",
    "options": [
      "Men rate 80% of women as below average in looks, while women rate men on a normal symmetrical bell curve.",
      "Both men and women rate each other on identical, perfectly symmetrical normal distributions.",
      "Women rate men solely based on reported income, showing zero variance in physical attractiveness ratings.",
      "Men rate women on a standard bell curve centered at average, while women rate 80% of men as 'below average' in physical appearance, yet women message these men anyway."
    ],
    "correctAnswer": 3,
    "explanation": "Men rate women on a normal bell curve centered cleanly around medium attractiveness (2.5 stars). In stark contrast, women rate 80% of men as 'worse-looking than medium' (below average). However, women's messaging behavior is far more generous: women frequently message men they rated as below average, whereas men exclusively message women they rated in the top tiers.",
    "citation": "Chapter 7: The Beauty Myth in Apotheosis - The Asymmetrical Curves"
  },
  {
    "id": "data-q28",
    "chapterId": "ch7",
    "chapterName": "Ch 7: The Beauty Myth in Apotheosis",
    "difficulty": "medium",
    "type": "scenario",
    "question": "A user spends weeks writing an eloquent, humorous profile essay but pairs it with an unflattering, low-resolution thumbnail photo. What does Rudder's research prove about the outcome?",
    "options": [
      "Spending 10 hours refining profile essays yields negligible returns if the profile photo is mediocre, because viewers overwrite essay perceptions with photo evaluations.",
      "Polishing profile essays is 5x more effective at generating inbound messages than upgrading lighting and photo quality.",
      "Users always read the entire profile essay before looking at the main profile photograph.",
      "Dating apps hide photos until users have exchanged at least three textual messages."
    ],
    "correctAnswer": 0,
    "explanation": "Rudder's data proves that a photo is not worth a thousand words\u2014it makes words completely irrelevant. Profile text accounts for less than 10% of a user's overall evaluation; an outstanding essay paired with a poor photo will simply be judged as poorly written due to the negative halo effect.",
    "citation": "Chapter 7: The Beauty Myth in Apotheosis - Words vs. Images"
  },
  {
    "id": "data-q29",
    "chapterId": "ch8",
    "chapterName": "Ch 8: It\u2019s What\u2019s Inside That Counts",
    "difficulty": "hard",
    "type": "concept",
    "question": "What happened during OkCupid's 'Love is Blind Day' experiment (July 20, 2013) when profile photos were removed for seven hours?",
    "options": [
      "When photos were removed, users completely stopped sending messages and platform traffic plummeted to zero.",
      "When photos were removed, users only messaged people in their immediate geographical zip code.",
      "Stripping photos caused reply rates to jump by 44% with deeper conversations, but when photos were restored at 4 PM, conversations with less attractive users abruptly dissolved.",
      "Stripping photos had zero measurable impact on conversation depth or subsequent contact information exchange."
    ],
    "correctAnswer": 2,
    "explanation": "When OkCupid stripped photos from the site for seven hours, users engaged in deeper conversations, exchanging contact info faster and replying at a 44% higher rate. However, when photos were restored at 4 PM, conversations with people revealed to be below average in looks evaporated almost instantly, showing how visual desire rapidly crushes personality-driven rapport.",
    "citation": "Chapter 8: It\u2019s What\u2019s Inside That Counts - Love is Blind Day"
  },
  {
    "id": "data-q30",
    "chapterId": "ch8",
    "chapterName": "Ch 8: It\u2019s What\u2019s Inside That Counts",
    "difficulty": "hard",
    "type": "concept",
    "question": "What did Seth Stephens-Davidowitz discover regarding Google search queries on the night Barack Obama was elected president in 2008?",
    "options": [
      "Private Google searches for racial slurs spiked dramatically on election night, exposing deep racial animus hidden by public opinion polls.",
      "Google search data proved that racial prejudice in America was completely eliminated by Barack Obama's election victory.",
      "Searches for political policy terms outnumbered searches for racial slurs by 100 to 1 across all media markets.",
      "Racial slurs were searched exclusively in southern states, while northern states showed zero search volume for biased terms."
    ],
    "correctAnswer": 0,
    "explanation": "While national news media heralded Obama's 2008 election as proof of a 'post-racial America', Stephens-Davidowitz found that private Google searches for the N-word and racial jokes surged to historic highs on election night. Search queries provided a digital truth serum, exposing the racial animus that voters hid from telephone survey pollsters.",
    "citation": "Chapter 8: It\u2019s What\u2019s Inside That Counts - Election Night Search Animus"
  },
  {
    "id": "data-q31",
    "chapterId": "ch8",
    "chapterName": "Ch 8: It\u2019s What\u2019s Inside That Counts",
    "difficulty": "hard",
    "type": "concept",
    "question": "How many percentage points of the national popular vote did Seth Stephens-Davidowitz calculate that racial animus cost Barack Obama in presidential elections?",
    "options": [
      "Racial animus gave Obama an estimated 2-point boost in the national popular vote due to minority mobilization.",
      "Stephens-Davidowitz calculated that racial animus cost Barack Obama 3 to 5 percentage points of the national popular vote in both 2008 and 2012.",
      "Racial animus cost Obama exactly 15 percentage points in the popular vote, nearly flipping the electoral college.",
      "Traditional telephone surveys accurately predicted Obama's racial vote penalty down to the decimal point."
    ],
    "correctAnswer": 1,
    "explanation": "By comparing Google search rates for racial slurs with county-level voting returns (controlling for economic variables, education, and prior Democratic performance), Stephens-Davidowitz estimated that racial animus reduced Obama's popular vote share by 3 to 5 percentage points in both 2008 and 2012.",
    "citation": "Chapter 8: It\u2019s What\u2019s Inside That Counts - The 3 to 5 Point Obama Penalty"
  },
  {
    "id": "data-q32",
    "chapterId": "ch8",
    "chapterName": "Ch 8: It\u2019s What\u2019s Inside That Counts",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does Christian Rudder connect Republican strategist Lee Atwater's 1981 interview to Google search data?",
    "options": [
      "Political campaign strategists rely entirely on overt slurs because coded rhetoric fails to mobilize voters.",
      "Coded political rhetoric has no connection to underlying racial attitudes among ordinary citizens.",
      "Social media platforms successfully banned all coded dog-whistles prior to the 2012 presidential election.",
      "Atwater documented how explicit racial slurs in 1954 evolved into sanitized economic rhetoric by 1968, a subconscious reality unmasked by private Google search data."
    ],
    "correctAnswer": 3,
    "explanation": "Atwater explained how the 'Southern Strategy' evolved from overt racial slurs in 1954 to abstract economic dog-whistles by 1968 ('forced busing', 'states' rights', 'tax cuts'). Rudder shows that while public political language became sanitized, private Google search data reveals that raw racial hostility never disappeared\u2014it merely retreated into private search bars.",
    "citation": "Chapter 8: It\u2019s What\u2019s Inside That Counts - The Southern Strategy and Search"
  },
  {
    "id": "data-q33",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Days of Rage",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Beihang University's landmark study of 70 million social media posts, which emotion was found to spread fastest and farthest across network nodes?",
    "options": [
      "Joy travels faster and across looser social ties than any other emotion on social networks.",
      "Sadness is the most infectious online sentiment, driving the highest retweet velocity.",
      "Anger spreads faster and farther across social graphs than joy, sadness, or disgust, acting as the primary catalyst for viral cascades.",
      "Disgust and fear spread equally fast, while anger remains confined to immediate mutual friend circles."
    ],
    "correctAnswer": 2,
    "explanation": "Researchers at Beihang University (Rui Fan et al.) tracked emotional contagion across Weibo. They discovered that anger propagates significantly faster and over wider network distances than joy, sadness, or disgust. Joy spreads primarily among close ties, but anger leaps across loose clusters, making moral outrage the natural equilibrium of social algorithms.",
    "citation": "Chapter 9: Days of Rage - The Virality of Anger"
  },
  {
    "id": "data-q34",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Days of Rage",
    "difficulty": "hard",
    "type": "scenario",
    "question": "What unique confluence of digital metrics turned Justine Sacco's ill-advised tweet into a global viral phenomenon in December 2013?",
    "options": [
      "An ill-conceived joke tweeted before an 11-hour flight went viral under #HasJustineLandedYet, creating a global outrage ritual that resulted in her firing before her plane touched down.",
      "Justine Sacco's tweet was defended by IAC leadership, sparking a worldwide boycott of all IAC properties.",
      "Twitter's automated safety algorithms deleted Sacco's tweet within 60 seconds, preventing public awareness.",
      "Sacco intentionally courted controversy as a publicity stunt to launch a personal branding consultancy."
    ],
    "correctAnswer": 0,
    "explanation": "Justine Sacco, a PR director for IAC, tweeted a clumsy joke about AIDS and Africa before boarding an 11-hour flight to South Africa. Cut off from internet access on the plane, she was unaware as #HasJustineLandedYet trended #1 worldwide, tens of thousands called for her head, and photographers gathered at the airport. She was fired before she landed.",
    "citation": "Chapter 9: Days of Rage - The Stoning of Justine Sacco"
  },
  {
    "id": "data-q35",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Days of Rage",
    "difficulty": "medium",
    "type": "concept",
    "question": "How do social media platforms transform innocent jokes or minor gaffes (such as Safiyyah Nawaz's tweet about the Earth's age) into targets for viral abuse?",
    "options": [
      "Social media algorithms prioritize nuanced debate by highlighting long-form clarifications and apologies.",
      "Social platforms strip away tone, personal context, and ironic intent, amplifying outrage because outrage metrics drive maximum platform engagement.",
      "Outrage mobs only form against public political officials and never target private individuals.",
      "Retweet metrics have no psychological influence on user participation in online shaming campaigns."
    ],
    "correctAnswer": 1,
    "explanation": "Safiyyah Nawaz tweeted a silly joke ('this beautiful earth is now 2014 years old, amazing') on New Year's Eve. Stripped of ironic context by the retweet mechanism, the tweet was taken literally, generating 16,000 retweets and a deluge of vicious misogynistic insults and death threats. Social media acts as a de-contextualization engine that weaponizes minor errors.",
    "citation": "Chapter 9: Days of Rage - De-Contextualization Engine"
  },
  {
    "id": "data-q36",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Days of Rage",
    "difficulty": "hard",
    "type": "concept",
    "question": "What historical irony did Christian Rudder uncover regarding the American Political Science Association\u2019s (APSA) 1950 report on political polarization?",
    "options": [
      "In 1950, the APSA demanded the total dissolution of political parties to ensure complete national consensus.",
      "The APSA's 1950 recommendations were implemented immediately, successfully preventing polarization in modern digital media.",
      "Social media platforms resolved polarization by algorithmically presenting opposing viewpoints to every user feed.",
      "In 1950, political scientists complained that political parties were too ideologically identical and urged polarization; digital algorithms fulfilled this wish to an extreme, destructive degree."
    ],
    "correctAnswer": 3,
    "explanation": "In 1950, the APSA published 'Toward a More Responsible Two-Party System', lamenting that Democrats and Republicans were virtually indistinguishable and explicitly calling for greater partisan polarization. Decades later, social media algorithms supercharged ideological tribalism, granting the political scientists' wish to a toxic, hyper-polarized extreme.",
    "citation": "Chapter 9: Days of Rage - The 1950 Polarization Inversion"
  },
  {
    "id": "data-q37",
    "chapterId": "ch10",
    "chapterName": "Ch 10: The Digital Footprint",
    "difficulty": "hard",
    "type": "concept",
    "question": "How does TF-IDF (term frequency-inverse document frequency) allow data scientists to extract meaningful demographic profiles from millions of essays?",
    "options": [
      "TF-IDF measures the raw total count of common English words like 'the', 'and', and 'I' to determine profile sophistication.",
      "TF-IDF filters out all slang terms to enforce academic English in profile text corpora.",
      "TF-IDF is used exclusively for detecting copyright infringement in user essays.",
      "TF-IDF isolates words that are statistically over-represented within a specific demographic cohort relative to the broader population, uncovering distinctive cultural markers."
    ],
    "correctAnswer": 3,
    "explanation": "If an algorithm merely counted the most frequent words, every demographic group would look identical, dominated by common words like 'the', 'love', and 'music'. TF-IDF weights words by their rarity across the broader population, identifying terms that are disproportionately prevalent within a specific demographic cohort (such as distinct cultural, culinary, or athletic references).",
    "citation": "Chapter 10: The Digital Footprint - Isolating Distinctive Vocabulary"
  },
  {
    "id": "data-q38",
    "chapterId": "ch10",
    "chapterName": "Ch 10: The Digital Footprint",
    "difficulty": "medium",
    "type": "concept",
    "question": "What distinctive cultural phrases emerged when Rudder analyzed OkCupid self-summary essays across racial demographics?",
    "options": [
      "All demographic groups use identical top phrases like 'love to laugh' and 'looking for fun', showing zero statistical divergence.",
      "Distinctive phrases clearly separate cohorts: white men distinctively mention 'hunting' and 'craft beer'; Black men cite 'soul food' and 'god-fearing'; Asian men feature 'tall for an Asian' and 'coding'.",
      "Asian men most frequently write about country music and NASCAR, defying all offline demographic trends.",
      "Women across all racial groups avoid mentioning food, travel, or pets in their open-ended self-summaries."
    ],
    "correctAnswer": 1,
    "explanation": "Rudder's statistical analysis of millions of essays revealed striking cultural signatures. White men over-index on 'hunting', 'snowboarding', and 'craft beer'; Black men distinctively feature 'soul food', 'god-fearing', and 'uplifting'; Asian men frequently include 'tall for an Asian' (reflecting awareness of dating stereotypes) and 'coding'.",
    "citation": "Chapter 10: The Digital Footprint - Demographic Linguistic Markers"
  },
  {
    "id": "data-q39",
    "chapterId": "ch10",
    "chapterName": "Ch 10: The Digital Footprint",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why do Christian Rudder and Seth Stephens-Davidowitz consider private Google search queries to be a vastly superior 'digital truth serum' compared to surveys?",
    "options": [
      "Because people search in total isolation without the pressure of an interviewer or social scrutiny, private search queries reveal authentic human motives that surveys conceal.",
      "Google search data is heavily distorted because most users deliberately enter misleading queries to confuse ad trackers.",
      "Telephone surveys are statistically more reliable than search data because human interviewers can detect deception through vocal inflections.",
      "Search engines only capture technological queries, leaving interpersonal and sociological attitudes unrecorded."
    ],
    "correctAnswer": 0,
    "explanation": "Surveys are systematically contaminated by social desirability bias\u2014the psychological pressure to look tolerant, smart, and virtuous in front of an interviewer. In contrast, the private search box acts as a digital confessional where individuals search without fear of judgment, revealing their rawest anxieties, prejudices, and desires.",
    "citation": "Chapter 10: The Digital Footprint - The Search Bar as Truth Serum"
  },
  {
    "id": "data-q40",
    "chapterId": "ch10",
    "chapterName": "Ch 10: The Digital Footprint",
    "difficulty": "medium",
    "type": "scenario",
    "question": "What is the primary difference between a person's stated digital identity (e.g. self-written profile essays) and their revealed digital footprint (e.g. search histories and click logs)?",
    "options": [
      "Profile essays reflect 100% accurate, unvarnished behavioral reality with zero aspirational embellishment.",
      "Machine learning models cannot distinguish between a user's self-written profile and a random text generator.",
      "While people use open-ended profile essays to construct an idealized, aspirational persona, their passive clickstreams and search queries expose their raw, unfiltered behavioral priorities.",
      "Digital footprints are easily scrubbed by users, rendering long-term behavioral profiling impossible."
    ],
    "correctAnswer": 2,
    "explanation": "A self-written essay is an aspirational advertisement: people write who they want the world to believe they are. Revealed digital breadcrumbs\u2014every click, search, message duration, and skip\u2014record who they actually are when they think no one is watching.",
    "citation": "Chapter 10: The Digital Footprint - Aspirational vs. Behavioral Identity"
  },
  {
    "id": "data-q41",
    "chapterId": "ch11",
    "chapterName": "Ch 11: The Mathematics of Identity",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the landmark 2013 Cambridge University/Microsoft study (Kosinski, Stillwell, Graepel), how accurately could benign Facebook 'Likes' predict male sexual orientation?",
    "options": [
      "Facebook likes predicted demographic attributes with no better accuracy than random guessing (under 50%).",
      "Innocuous Facebook likes predicted male sexual orientation with 88% accuracy, ethnic origin with 95% accuracy, and political affiliation with 85% accuracy.",
      "Facebook likes only predicted musical taste and had zero correlation with sensitive psychometric traits.",
      "The Cambridge model required access to private messaging transcripts and could not predict traits from public likes alone."
    ],
    "correctAnswer": 1,
    "explanation": "Michal Kosinski, David Stillwell, and Thore Graepel analyzed 58,000 Facebook users' Likes. Using mathematical dimensionality reduction, their algorithm predicted male homosexuality with 88% accuracy, African American vs. Caucasian ethnicity with 95% accuracy, and political party (Democrat vs. Republican) with 85% accuracy, purely from innocuous public likes.",
    "citation": "Chapter 11: The Mathematics of Identity - Cambridge Likes Research"
  },
  {
    "id": "data-q42",
    "chapterId": "ch11",
    "chapterName": "Ch 11: The Mathematics of Identity",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why did liking 'Curly Fries' on Facebook emerge as one of the strongest statistical predictors of high intelligence in the Cambridge University study?",
    "options": [
      "Eating curly fries provides neuro-nutritional compounds that directly elevate cognitive function.",
      "Target and Facebook ran joint marketing campaigns promoting curly fries exclusively to Mensa members.",
      "Users who liked curly fries deliberately conspired to manipulate machine learning benchmark tests.",
      "An early group of high-IQ users liked the page, and the like diffused through their homophilic network of intelligent friends, turning a harmless consumer item into an accurate psychometric proxy."
    ],
    "correctAnswer": 3,
    "explanation": "There is no causal or biological relationship between potatoes and IQ. An early cluster of high-intelligence students liked the curly fries page, and because social networks exhibit strong homophily (smart people befriend smart people), the page spread viral likes through high-IQ social graphs, turning a trivial brand into a potent statistical proxy for intelligence.",
    "citation": "Chapter 11: The Mathematics of Identity - The Curly Fries Phenomenon"
  },
  {
    "id": "data-q43",
    "chapterId": "ch11",
    "chapterName": "Ch 11: The Mathematics of Identity",
    "difficulty": "hard",
    "type": "concept",
    "question": "How did MIT students Carter Jernigan and Behram Mistree construct their 2009 'Gaydar' algorithm, and what did it achieve?",
    "options": [
      "Jernigan and Mistree predicted male sexual orientation with 78% accuracy purely from the gender and sexuality of the user's Facebook friends, without reading any profile text.",
      "The algorithm analyzed facial symmetry in profile photos using deep convolutional neural networks.",
      "The software searched for explicit romantic keywords in private user wall posts and instant messages.",
      "The program accurately identified sexual orientation only if the user explicitly joined LGBT campus affinity groups."
    ],
    "correctAnswer": 0,
    "explanation": "Jernigan and Mistree proved that an individual's friend network outs them. Without looking at the user's status updates, photos, or declared orientation, the algorithm analyzed the ratio of gay and straight male friends in the user's network, predicting male homosexuality with 78% accuracy. An individual in the closet was outed simply by the company he kept.",
    "citation": "Chapter 11: The Mathematics of Identity - MIT Gaydar Project"
  },
  {
    "id": "data-q44",
    "chapterId": "ch11",
    "chapterName": "Ch 11: The Mathematics of Identity",
    "difficulty": "hard",
    "type": "concept",
    "question": "What does Google search volume for 'Is my husband gay?' reveal about the geography of sexual orientation and the American closet?",
    "options": [
      "Searches for 'Is my husband gay?' occur almost exclusively in liberal coastal states where homosexuality is publicly accepted.",
      "The query 'Is my husband gay?' is five times less common than queries asking if a husband is addicted to gambling.",
      "The search 'Is my husband gay?' is the #1 inquiry following 'Is my husband...' in the US, occurring at identical rates in conservative states as in liberal states, proving homophobia forces gay men into heterosexual marriages.",
      "Google Trends indicates that gay men comprise over 25% of the male population in every US county."
    ],
    "correctAnswer": 2,
    "explanation": "Across the entire United States, the most frequent search following 'Is my husband...' is '...gay?' (10% higher than 'cheating'). Crucially, the search volume is equally high in deeply conservative states (Mississippi, Louisiana, South Carolina) as in liberal ones. This proves the proportion of gay men is biologically constant (~5%), and social homophobia simply forces thousands of men into closeted marriages.",
    "citation": "Chapter 11: The Mathematics of Identity - The Geography of the Closet"
  },
  {
    "id": "data-q45",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Epilogue / The Panopticon",
    "difficulty": "hard",
    "type": "scenario",
    "question": "How did Target data statistician Andrew Pole develop an algorithm to identify pregnant shoppers, and what famous ethical crisis did it trigger?",
    "options": [
      "Target required pregnant shoppers to register their ultrasound scans in exchange for nursery discount coupons.",
      "By tracking purchases of 25 innocuous items like unscented lotion, magnesium, and calcium, Target assigned a pregnancy prediction score that accurately predicted trimesters and outed a pregnant teenager to her father.",
      "Target's predictive algorithm failed completely, misidentifying male college students as expecting mothers 90% of the time.",
      "Target only tracked prenatal vitamins, which shoppers refused to buy with store loyalty cards."
    ],
    "correctAnswer": 1,
    "explanation": "Target analyzed purchasing data from baby shower registries and identified 25 specific items (unscented lotion, large cotton balls, zinc, magnesium supplements) that spiked during pregnancy. Target assigned a pregnancy prediction score and sent maternity coupons to a high school girl, alerting her angry father to her pregnancy before she had told him.",
    "citation": "Chapter 12: Epilogue / The Panopticon - Target's Pregnancy Algorithm"
  },
  {
    "id": "data-q46",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Epilogue / The Panopticon",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the 'Privacy Paradox' highlighted by Christian Rudder in modern surveillance society?",
    "options": [
      "Citizens who study computer science care significantly less about privacy than citizens who lack technical education.",
      "Government surveillance protects citizen privacy more effectively than commercial end-to-end encryption.",
      "Consumers refuse to use any digital product that requests access to their GPS location or contact book.",
      "While over 80% of citizens profess deep concern over surveillance in public opinion surveys, their revealed behavior is completely blas\u00e9, freely exchanging intimate telemetry for minor conveniences and free apps."
    ],
    "correctAnswer": 3,
    "explanation": "The privacy paradox describes the massive contradiction between stated concern and revealed behavior. When polled, people vehemently state they cherish their digital privacy. Yet in practice, they willingly click 'Agree' to invasive terms of service, broadcasting their exact locations, search queries, and friend networks for a free game or a 10% coupon.",
    "citation": "Chapter 12: Epilogue / The Panopticon - The Privacy Paradox"
  },
  {
    "id": "data-q47",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Epilogue / The Panopticon",
    "difficulty": "hard",
    "type": "concept",
    "question": "How does Jeremy Bentham\u2019s 18th-century architectural Panopticon serve as a model for modern digital surveillance?",
    "options": [
      "The Panopticon was an ancient Roman forum designed to encourage public democratic debate through complete transparency.",
      "The Panopticon describes a system where citizens possess full reciprocal surveillance authority over corporate boardrooms and state intelligence agencies.",
      "Originally an 18th-century prison architecture where invisible observation enforces internalized self-policing, the Panopticon now describes the ubiquitous, invisible tracking of daily digital life by states and corporations.",
      "Modern encryption technologies have completely dismantled Bentham's Panopticon, guaranteeing total privacy for all internet users."
    ],
    "correctAnswer": 2,
    "explanation": "Bentham designed the Panopticon as a circular prison with a central guard tower where inmates never knew if they were being observed, forcing them to constantly police themselves. In the digital age, NSA PRISM collection, telemetry tracking, and corporate data brokers create an invisible, permanent Panopticon where every digital movement is stored indefinitely.",
    "citation": "Chapter 12: Epilogue / The Panopticon - The Digital Panopticon"
  },
  {
    "id": "data-q48",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Epilogue / The Panopticon",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the Coda of Dataclysm, Christian Rudder invokes statistician Edward Tufte and the Vietnam Veterans Memorial to articulate what core mission of data science?",
    "options": [
      "The true moral and artistic goal of big data is not reductive corporate exploitation, but illuminating the sacred individual human lives and stories embedded within the aggregate statistical blur.",
      "Data visualizations must prioritize animated corporate 3D graphics over static 2D information density to maximize user retention.",
      "Individual human stories should be completely stripped from data science to preserve mathematical objectivity.",
      "Complex social phenomena can always be accurately summarized by a single scalar metric like a Klout score."
    ],
    "correctAnswer": 0,
    "explanation": "Rudder reflects on Maya Lin's Vietnam Veterans Memorial, praised by Edward Tufte: from a distance, 58,000 names look like a gray abstract blur of casualties, but up close, every single entry is an irreplaceable human life with a name, date, and family. The true calling of data science is to use aggregate data not to erase individuality, but to understand and honor the human reality within the blur.",
    "citation": "Chapter 12: Epilogue / The Panopticon - Edward Tufte and the Human Blur"
  }
];

const DEFAULT_BOOKS = [
  {
    "id": "seven-principles",
    "title": "The Seven Principles for Making Marriage Work",
    "author": "John Gottman, Ph.D. & Nan Silver",
    "year": 2015,
    "description": "The definitive empirical guide to relationship longevity from the Seattle Love Lab. Tests your knowledge on the 7 principles, the Four Horsemen, conflict types, and daily habits.",
    "icon": "❤️",
    "dataFile": "data/seven-principles.json",
    "totalQuestions": 97,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: Inside the Seattle Love Lab & Marriage Myths"
      },
      {
        "id": "ch2",
        "name": "Ch 2: The Sound Relationship House & Trust"
      },
      {
        "id": "ch3",
        "name": "Ch 3: Predicting Divorce & The Four Horsemen"
      },
      {
        "id": "ch4",
        "name": "Ch 4: Principle 1 - Enhance Your Love Maps"
      },
      {
        "id": "ch5",
        "name": "Ch 5: Principle 2 - Nurture Fondness & Admiration"
      },
      {
        "id": "ch6",
        "name": "Ch 6: Principle 3 - Turn Toward Each Other"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Principle 4 - Let Your Partner Influence You"
      },
      {
        "id": "ch8",
        "name": "Ch 8: Solvable vs. Perpetual Conflicts"
      },
      {
        "id": "ch9",
        "name": "Ch 9: Principle 5 - Solve Your Solvable Problems"
      },
      {
        "id": "ch10",
        "name": "Ch 10: Coping with Typical Solvable Problems"
      },
      {
        "id": "ch11",
        "name": "Ch 11: Principle 6 - Overcome Gridlock"
      },
      {
        "id": "ch12",
        "name": "Ch 12: Principle 7 - Create Shared Meaning"
      },
      {
        "id": "afterword",
        "name": "Afterword: The Magic Six Hours & Daily Habits"
      }
    ]
  },
  {
    "id": "never-split",
    "title": "Never Split the Difference: Negotiating As If Your Life Depended On It",
    "author": "Chris Voss with Tahl Raz",
    "year": 2016,
    "description": "A former lead FBI international kidnapping negotiator shares field-tested principles for high-stakes bargaining, tactical empathy, calibrated questions, labeling, and uncovering Black Swans.",
    "icon": "🤝",
    "dataFile": "data/never-split.json",
    "totalQuestions": 62,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: The New Rules & System 1 Psychology"
      },
      {
        "id": "ch2",
        "name": "Ch 2: Be a Mirror (Voices & Isopraxism)"
      },
      {
        "id": "ch3",
        "name": "Ch 3: Don’t Feel Their Pain, Label It (Tactical Empathy)"
      },
      {
        "id": "ch4",
        "name": "Ch 4: Beware “Yes”—Master “No”"
      },
      {
        "id": "ch5",
        "name": "Ch 5: Trigger “That’s Right” (Summaries)"
      },
      {
        "id": "ch6",
        "name": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, “Fair”)"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Create the Illusion of Control (Calibrated Questions)"
      },
      {
        "id": "ch8",
        "name": "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)"
      },
      {
        "id": "ch9",
        "name": "Ch 9: Bargain Hard (Ackerman Model & Types)"
      },
      {
        "id": "ch10",
        "name": "Ch 10: Find the Black Swan (Unknowns & Leverage)"
      },
      {
        "id": "appendix",
        "name": "Appendix: Prepare a Negotiation One Sheet"
      }
    ]
  },
  {
    "id": "dataclysm",
    "title": "Dataclysm: Who We Are (When We Think No One’s Looking)",
    "author": "Christian Rudder",
    "year": 2014,
    "description": "A big-data investigation into human nature by the co-founder of OkCupid. Tests mathematical principles, revealed vs. stated preferences, algorithmic self-fulfilling prophecies, and the digital Panopticon.",
    "icon": "📊",
    "dataFile": "data/dataclysm.json",
    "totalQuestions": 48,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: Wooderson’s Law"
      },
      {
        "id": "ch2",
        "name": "Ch 2: Death by a Thousand Mehs"
      },
      {
        "id": "ch3",
        "name": "Ch 3: Writing on the Wall"
      },
      {
        "id": "ch4",
        "name": "Ch 4: You Gotta Be the Glue"
      },
      {
        "id": "ch5",
        "name": "Ch 5: There’s No Success Like Failure"
      },
      {
        "id": "ch6",
        "name": "Ch 6: The Confounding Factor"
      },
      {
        "id": "ch7",
        "name": "Ch 7: The Beauty Myth in Apotheosis"
      },
      {
        "id": "ch8",
        "name": "Ch 8: It’s What’s Inside That Counts"
      },
      {
        "id": "ch9",
        "name": "Ch 9: Days of Rage"
      },
      {
        "id": "ch10",
        "name": "Ch 10: The Digital Footprint"
      },
      {
        "id": "ch11",
        "name": "Ch 11: The Mathematics of Identity"
      },
      {
        "id": "ch12",
        "name": "Ch 12: Epilogue / The Panopticon"
      }
    ]
  },
  {
    "id": "six-minute-xray",
    "title": "The Six-Minute X-Ray: Rapid Behavior Profiling",
    "author": "Chase Hughes",
    "year": 2020,
    "description": "The definitive tactical manual for rapid behavioral profiling, deception detection, baseline calibration, and elicitation psychology developed for intelligence personnel and elite interrogators.",
    "icon": "👁️",
    "dataFile": "data/six-minute-xray.json",
    "totalQuestions": 54,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: Skills, Triune Brain Architecture & The 2/3 Rule"
      },
      {
        "id": "ch2",
        "name": "Ch 2: The Four Laws of Human Behavior & The Four Lenses"
      },
      {
        "id": "ch3",
        "name": "Ch 3: The Behavioral Table of Elements & Baseline Architecture"
      },
      {
        "id": "ch4",
        "name": "Ch 4: The Eyes: Blink Rate, GHT & Pupillometry"
      },
      {
        "id": "ch5",
        "name": "Ch 5: The Face: Micro-Expressions, Asymmetry & Lip Compression"
      },
      {
        "id": "ch6",
        "name": "Ch 6: The Body: Posture, Barriers & Micro-Movements"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Deception Detection & Verbal Leakage Markers"
      },
      {
        "id": "ch8",
        "name": "Ch 8: Elicitation & The Hourglass Method"
      },
      {
        "id": "ch9",
        "name": "Ch 9: The Human Needs Map & Hidden Fears"
      },
      {
        "id": "ch10",
        "name": "Ch 10: The Decision Map© (The Six Decision Pillars)"
      },
      {
        "id": "ch11",
        "name": "Ch 11: Sensory Preference Identification (VAK Predicates)"
      },
      {
        "id": "ch12",
        "name": "Ch 12: Pronoun Identification & Psychological Indexing"
      },
      {
        "id": "ch13",
        "name": "Ch 13: Adjective Matching & Linguistic Pacing"
      },
      {
        "id": "ch14",
        "name": "Ch 14: How Compliance Works & Behavioral Entrainment"
      },
      {
        "id": "ch15",
        "name": "Ch 15: The Quadrant: Rapid Real-Time Profiling"
      },
      {
        "id": "ch16",
        "name": "Ch 16: The Behavior Compass: Circular Profiling Form"
      },
      {
        "id": "ch17",
        "name": "Ch 17: Tactical Profiling in Action: Critical Scenarios"
      },
      {
        "id": "ch18",
        "name": "Ch 18: The Six-Minute Protocol & Operational Training Roadmap"
      }
    ]
  },
  {
    "id": "subtle-art",
    "title": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    "author": "Mark Manson",
    "year": 2016,
    "description": "A counterintuitive guide to finding peace, resilience, and purpose by choosing what struggles are worthy of your limited time and letting go of the rest.",
    "icon": "⚡",
    "dataFile": "data/subtle-art.json",
    "totalQuestions": 54,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: Don’t Try"
      },
      {
        "id": "ch2",
        "name": "Ch 2: Happiness Is a Problem"
      },
      {
        "id": "ch3",
        "name": "Ch 3: You Are Not Special"
      },
      {
        "id": "ch4",
        "name": "Ch 4: The Value of Suffering"
      },
      {
        "id": "ch5",
        "name": "Ch 5: You Are Always Choosing"
      },
      {
        "id": "ch6",
        "name": "Ch 6: You’re Wrong About Everything (And So Am I)"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Failure Is the Way Forward"
      },
      {
        "id": "ch8",
        "name": "Ch 8: The Importance of Saying No"
      },
      {
        "id": "ch9",
        "name": "Ch 9: . . . And Then You Die"
      }
    ]
  },
  {
    "id": "how-to-not-die-alone",
    "title": "How to Not Die Alone: The Surprising Science That Will Help You Find Love",
    "author": "Logan Ury",
    "year": 2021,
    "description": "A behavioral scientist turned dating coach offers an evidence-based roadmap to finding, building, and keeping lasting love using behavioral economics, attachment theory, and relationship design.",
    "icon": "💘",
    "dataFile": "data/how-to-not-die-alone.json",
    "totalQuestions": 64,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: Why Dating Is Harder Now Than Ever"
      },
      {
        "id": "ch2",
        "name": "Ch 2: The Three Dating Tendencies"
      },
      {
        "id": "ch3",
        "name": "Ch 3: Disney Lied to Us"
      },
      {
        "id": "ch4",
        "name": "Ch 4: Don’t Let Perfect Be the Enemy of Great"
      },
      {
        "id": "ch5",
        "name": "Ch 5: Don’t Wait, Date"
      },
      {
        "id": "ch6",
        "name": "Ch 6: Learn Your Attachment Style"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Look for a Life Partner, Not a Prom Date"
      },
      {
        "id": "ch8",
        "name": "Ch 8: You Think You Know What You Want, but You’re Wrong"
      },
      {
        "id": "ch9",
        "name": "Ch 9: Meet People in Real Life"
      },
      {
        "id": "ch10",
        "name": "Ch 10: Your Dating Apps Are Doing It Wrong"
      },
      {
        "id": "ch11",
        "name": "Ch 11: Shift from Checklist to Experiential"
      },
      {
        "id": "ch12",
        "name": "Ch 12: Decide, Don't Slide"
      },
      {
        "id": "ch13",
        "name": "Ch 13: Stop Looking for the Spark"
      },
      {
        "id": "ch14",
        "name": "Ch 14: Hard Conversations & Breakups"
      },
      {
        "id": "ch15",
        "name": "Ch 15: The Modern Marriage Contract"
      },
      {
        "id": "ch16",
        "name": "Ch 16: Intentional Love"
      }
    ]
  },
  {
    "id": "how-to-lie-with-statistics",
    "title": "How to Lie with Statistics",
    "author": "Darrell Huff",
    "year": 1954,
    "description": "The classic guide to identifying statistical deception, manipulated graphs, biased samples, and semi-attached figures in public and media discourse.",
    "icon": "📉",
    "dataFile": "data/how-to-lie-with-statistics.json",
    "totalQuestions": 40,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: The Sample with the Built-in Bias"
      },
      {
        "id": "ch2",
        "name": "Ch 2: The Well-Chosen Average"
      },
      {
        "id": "ch3",
        "name": "Ch 3: The Little Figures That Are Not There"
      },
      {
        "id": "ch4",
        "name": "Ch 4: Much Ado about Practically Nothing"
      },
      {
        "id": "ch5",
        "name": "Ch 5: The Gee-Whiz Graph"
      },
      {
        "id": "ch6",
        "name": "Ch 6: The One-Dimensional Picture"
      },
      {
        "id": "ch7",
        "name": "Ch 7: The Semiattached Figure"
      },
      {
        "id": "ch8",
        "name": "Ch 8: Post Hoc Rides Again"
      },
      {
        "id": "ch9",
        "name": "Ch 9: How to Statisticulate"
      },
      {
        "id": "ch10",
        "name": "Ch 10: How to Talk Back to a Statistic"
      }
    ]
  },
  {
    "id": "scattered-minds",
    "title": "Scattered Minds: The Origins and Healing of Attention Deficit Disorder",
    "author": "Gabor Maté, M.D.",
    "year": 2000,
    "description": "Dr. Gabor Maté’s groundbreaking, compassionate investigation into ADD as an impairment of developmental neurobiology rooted in early attachment and emotional stress, rather than a purely genetic pathology.",
    "icon": "🧠",
    "dataFile": "data/scattered-minds.json",
    "totalQuestions": 50,
    "chapters": [
      {
        "id": "ch1",
        "name": "Ch 1: So Much Soup and Garbage Can"
      },
      {
        "id": "ch2",
        "name": "Ch 2: Many Roads Not Traveled"
      },
      {
        "id": "ch3",
        "name": "Ch 3: We Could All Go Crazy"
      },
      {
        "id": "ch4",
        "name": "Ch 4: A Conflictual Marriage: ADD and the Family (I)"
      },
      {
        "id": "ch5",
        "name": "Ch 5: Forgetting to Remember the Future"
      },
      {
        "id": "ch6",
        "name": "Ch 6: Different Worlds: Heredity and the Environments of Childhood"
      },
      {
        "id": "ch7",
        "name": "Ch 7: Emotional Allergies: ADD and Sensitivity"
      },
      {
        "id": "ch8",
        "name": "Ch 8: A Surrealistic Choreography"
      },
      {
        "id": "ch9",
        "name": "Ch 9: Attunement and Attachment"
      },
      {
        "id": "ch10",
        "name": "Ch 10: The Footprints of Infancy"
      },
      {
        "id": "ch11",
        "name": "Ch 11: An Utter Stranger: ADD and the Family (II)"
      },
      {
        "id": "ch12",
        "name": "Ch 12: Stories within Stories: ADD and the Family (III)"
      },
      {
        "id": "ch13",
        "name": "Ch 13: This Most Frenetic of Cultures: The Social Roots of ADD"
      },
      {
        "id": "ch14",
        "name": "Ch 14: Severed Thoughts and Flibbertigibbets: Distractibility and Tuning Out"
      },
      {
        "id": "ch15",
        "name": "Ch 15: The Pendulum Swings: Hyperactivity, Lethargy and Shame"
      },
      {
        "id": "ch16",
        "name": "Ch 16: It Ain’t Over Till It’s Over: Unconditional Positive Regard"
      },
      {
        "id": "ch17",
        "name": "Ch 17: Wooing the Child"
      },
      {
        "id": "ch18",
        "name": "Ch 18: Like Fish in the Sea"
      },
      {
        "id": "ch19",
        "name": "Ch 19: Just Looking for Attention"
      },
      {
        "id": "ch20",
        "name": "Ch 20: The Defiant Ones: Oppositionality"
      },
      {
        "id": "ch21",
        "name": "Ch 21: Defusing Counterwill"
      },
      {
        "id": "ch22",
        "name": "Ch 22: My Marshmallow Caught Fire: Motivation and Autonomy"
      },
      {
        "id": "ch23",
        "name": "Ch 23: Trusting the Child, Trusting Oneself: ADD in the Classroom"
      },
      {
        "id": "ch24",
        "name": "Ch 24: Always on My Case: Teenagers"
      },
      {
        "id": "ch25",
        "name": "Ch 25: Justifying One’s Existence: Self-Esteem"
      },
      {
        "id": "ch26",
        "name": "Ch 26: Memories Are Made of This"
      },
      {
        "id": "ch27",
        "name": "Ch 27: Remembering What Didn’t Happen: The ADD Relationship"
      },
      {
        "id": "ch28",
        "name": "Ch 28: Moses Saved by the Angel: Self-Parenting (I)"
      },
      {
        "id": "ch29",
        "name": "Ch 29: The Physical and Spiritual Environment: Self-Parenting (II)"
      },
      {
        "id": "ch30",
        "name": "Ch 30: In Place of Tears and Sorrow: Addictions and the ADD Brain"
      },
      {
        "id": "ch31",
        "name": "Ch 31: I Never Saw the Trees: What Medications Can and Cannot Do"
      },
      {
        "id": "ch32",
        "name": "Ch 32: What It Means to Attend"
      }
    ]
  }
];


// ============================================================================
// APP STATE
// ============================================================================
const state = {
  books: [],
  selectedBook: null,
  activeQuestions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  quizConfig: {
    mode: "practice", // "practice" | "exam"
    difficulty: "all",
    count: "all",
    selectedChapters: []
  },
  isAnswerSubmitted: false
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const views = {
  library: document.getElementById("viewLibrary"),
  summaries: document.getElementById("viewSummaries"),
  config: document.getElementById("viewConfig"),
  quiz: document.getElementById("viewQuiz"),
  results: document.getElementById("viewResults")
};

const dom = {
  themeToggle: document.getElementById("themeToggle"),
  navHome: document.getElementById("navHome"),
  btnNavSummaries: document.getElementById("btnNavSummaries"),
  booksGrid: document.getElementById("booksGrid"),
  btnImportBook: document.getElementById("btnImportBook"),
  modalImportBook: document.getElementById("modalImportBook"),
  btnCloseImportModal: document.getElementById("btnCloseImportModal"),

  // Summaries view
  btnBackFromSummaries: document.getElementById("btnBackFromSummaries"),
  summariesBookTitle: document.getElementById("summariesBookTitle"),
  summariesQuickNav: document.getElementById("summariesQuickNav"),
  summariesContainer: document.getElementById("summariesContainer"),

  // Config view
  btnBackToLibrary: document.getElementById("btnBackToLibrary"),
  btnReadSummariesFromConfig: document.getElementById("btnReadSummariesFromConfig"),
  configBookIcon: document.getElementById("configBookIcon"),
  configBookTitle: document.getElementById("configBookTitle"),
  configBookAuthor: document.getElementById("configBookAuthor"),
  configChaptersList: document.getElementById("configChaptersList"),
  btnSelectAllChapters: document.getElementById("btnSelectAllChapters"),
  btnDeselectAllChapters: document.getElementById("btnDeselectAllChapters"),
  quizConfigForm: document.getElementById("quizConfigForm"),
  configMode: document.getElementById("configMode"),
  configCount: document.getElementById("configCount"),
  configDifficulty: document.getElementById("configDifficulty"),
  modeHint: document.getElementById("modeHint"),

  // Quiz view
  btnQuitQuiz: document.getElementById("btnQuitQuiz"),
  quizProgressBar: document.getElementById("quizProgressBar"),
  quizProgressText: document.getElementById("quizProgressText"),
  quizLiveScore: document.getElementById("quizLiveScore"),
  qChapterBadge: document.getElementById("qChapterBadge"),
  qDifficultyBadge: document.getElementById("qDifficultyBadge"),
  qQuestionText: document.getElementById("qQuestionText"),
  qOptionsGrid: document.getElementById("qOptionsGrid"),
  explanationBox: document.getElementById("explanationBox"),
  explanationTitle: document.getElementById("explanationTitle"),
  explanationIcon: document.getElementById("explanationIcon"),
  explanationText: document.getElementById("explanationText"),
  citationPill: document.getElementById("citationPill"),
  citationText: document.getElementById("citationText"),
  btnNextQuestion: document.getElementById("btnNextQuestion"),

  // Results view
  resultsTrophy: document.getElementById("resultsTrophy"),
  resultsGradeTitle: document.getElementById("resultsGradeTitle"),
  resultsSubtitle: document.getElementById("resultsSubtitle"),
  resultsFinalScore: document.getElementById("resultsFinalScore"),
  resultsRawScore: document.getElementById("resultsRawScore"),
  resultsBreakdownList: document.getElementById("resultsBreakdownList"),
  resultsReviewList: document.getElementById("resultsReviewList"),
  btnRetakeQuiz: document.getElementById("btnRetakeQuiz"),
  btnReviewMissed: document.getElementById("btnReviewMissed"),
  btnReturnToLibrary: document.getElementById("btnReturnToLibrary"),

  // Modal elements
  fileInput: document.getElementById("fileInput"),
  pasteBookMetadata: document.getElementById("pasteBookMetadata"),
  pasteQuestionsJson: document.getElementById("pasteQuestionsJson"),
  btnSubmitPasted: document.getElementById("btnSubmitPasted")
};

// ============================================================================
// INITIALIZATION
// ============================================================================
async function initApp() {
  initTheme();
  initEventListeners();
  await loadBooks();
  showView("library");
}

function initTheme() {
  const savedTheme = localStorage.getItem("bookquiz_theme") || "light";
  document.body.className = `theme-${savedTheme}`;
  dom.themeToggle.querySelector(".theme-icon").textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  const isDark = document.body.classList.contains("theme-dark");
  const newTheme = isDark ? "light" : "dark";
  document.body.className = `theme-${newTheme}`;
  localStorage.setItem("bookquiz_theme", newTheme);
  dom.themeToggle.querySelector(".theme-icon").textContent = newTheme === "dark" ? "☀️" : "🌙";
}

function showView(viewName) {
  Object.keys(views).forEach(v => {
    if (views[v]) {
      views[v].classList.toggle("active", v === viewName);
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// DATA LOADING
// ============================================================================
async function loadBooks() {
  let books = [];
  if (window.EMBEDDED_BOOKS && Array.isArray(window.EMBEDDED_BOOKS) && window.EMBEDDED_BOOKS.length > 0) {
    books = window.EMBEDDED_BOOKS;
  } else {
    try {
      const res = await fetch("data/books.json");
      if (res.ok) {
        books = await res.json();
      }
    } catch (err) {
      // Local file or fetch unavailable; fallback cleanly
    }
  }

  if (!books || books.length === 0) {
    books = [...DEFAULT_BOOKS];
  }

  const customBooks = JSON.parse(localStorage.getItem("bookquiz_custom_books") || "[]");
  state.books = [...books, ...customBooks];

  renderLibrary();
}

async function loadBookQuestions(book) {
  // 1. If custom questions imported by user exist in localStorage, use them
  const customQuestions = localStorage.getItem(`bookquiz_questions_${book.id}`);
  if (customQuestions) {
    try {
      const parsed = JSON.parse(customQuestions);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }

  // 2. Try fetching latest data file from repository (for GitHub Pages / HTTP server)
  try {
    const targetFile = book.dataFile || `data/${book.id}.json`;
    const res = await fetch(targetFile);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (e) {
    // Offline or network error; fallback to embedded defaults below
  }

  // 3. Fallback to embedded default constants (offline / local failover)
  if (window.EMBEDDED_QUESTIONS && window.EMBEDDED_QUESTIONS[book.id]) {
    return window.EMBEDDED_QUESTIONS[book.id];
  }
  if (book.id === "seven-principles" && typeof DEFAULT_SEVEN_PRINCIPLES_QUESTIONS !== "undefined") {
    return DEFAULT_SEVEN_PRINCIPLES_QUESTIONS;
  }
  if (book.id === "never-split" && typeof DEFAULT_NEVER_SPLIT_QUESTIONS !== "undefined") {
    return DEFAULT_NEVER_SPLIT_QUESTIONS;
  }
  if (book.id === "dataclysm" && typeof DEFAULT_DATACYCLISM_QUESTIONS !== "undefined") {
    return DEFAULT_DATACYCLISM_QUESTIONS;
  }

  return [];
}

// ============================================================================
// VIEW 1: LIBRARY RENDERING
// ============================================================================
function renderLibrary() {
  dom.booksGrid.innerHTML = "";

  state.books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <div class="book-card-header">
        <div class="book-icon-badge">${book.icon || "📚"}</div>
        <div class="book-card-meta">
          <h3>${book.title}</h3>
          <p class="book-card-author">${book.author || "Unknown Author"}</p>
        </div>
      </div>
      <p class="book-card-desc">${book.description || "A deep-dive quiz to test your comprehension and retention of this book."}</p>
      <div class="book-card-footer">
        <span class="book-stats-pill">${book.totalQuestions || "Quiz Available"}</span>
        <div class="card-btn-group">
          <button class="btn btn-secondary btn-sm btn-card-summary" data-id="${book.id}">📖 Summaries</button>
          <button class="btn btn-primary btn-sm btn-card-start" data-id="${book.id}">Start Quiz →</button>
        </div>
      </div>
    `;

    card.querySelector(".btn-card-summary").addEventListener("click", (e) => {
      e.stopPropagation();
      openSummariesForBook(book);
    });

    card.querySelector(".btn-card-start").addEventListener("click", (e) => {
      e.stopPropagation();
      selectBookForQuiz(book);
    });

    card.addEventListener("click", () => selectBookForQuiz(book));
    dom.booksGrid.appendChild(card);
  });
}

// ============================================================================
// VIEW: CHAPTER SUMMARIES (STUDY GUIDE)
// ============================================================================
async function openSummariesForBook(book) {
  state.selectedBook = book;
  dom.summariesBookTitle.textContent = book.title;

  let summaries = [];

  // 1. Try fetching latest summaries from data/
  try {
    const res = await fetch(`data/${book.id}-summaries.json`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        summaries = data;
      }
    }
  } catch (e) {}

  // 2. Fallback to embedded summaries
  if (!summaries || summaries.length === 0) {
    if (window.EMBEDDED_SUMMARIES && window.EMBEDDED_SUMMARIES[book.id]) {
      summaries = window.EMBEDDED_SUMMARIES[book.id];
    } else if (book.id === "seven-principles") {
      summaries = DEFAULT_SEVEN_PRINCIPLES_SUMMARIES;
    } else if (book.id === "never-split") {
      summaries = DEFAULT_NEVER_SPLIT_SUMMARIES;
    } else if (book.id === "dataclysm") {
      summaries = DEFAULT_DATACYCLISM_SUMMARIES;
    }
  }

  if (summaries.length === 0) {
    dom.summariesContainer.innerHTML = `<p style="padding: 2rem; color: var(--text-muted); text-align: center;">No chapter summaries available for this book yet. You can still test your knowledge via the quiz!</p>`;
    dom.summariesQuickNav.innerHTML = "";
    showView("summaries");
    return;
  }

  // Build quick nav bar
  dom.summariesQuickNav.innerHTML = "";
  summaries.forEach((s, idx) => {
    const navBtn = document.createElement("button");
    navBtn.className = "quick-nav-pill";
    navBtn.textContent = (s.id === "appendix" || s.chapterNumber === 11) ? "Appendix" : (s.chapterNumber <= 10 ? `Ch ${s.chapterNumber}` : (book.id === "seven-principles" ? "Afterword" : `Ch ${s.chapterNumber}`));
    navBtn.addEventListener("click", () => {
      const el = document.getElementById(`summary-card-${s.id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    dom.summariesQuickNav.appendChild(navBtn);
  });

  // Build summary cards
  dom.summariesContainer.innerHTML = "";
  summaries.forEach(s => {
    const card = document.createElement("div");
    card.className = "summary-card";
    card.id = `summary-card-${s.id}`;

    let counterIntuitiveHtml = "";
    if (s.counterIntuitiveInsights && s.counterIntuitiveInsights.length > 0) {
      counterIntuitiveHtml = `
        <div class="summary-section">
          <h4>⚡ Counter-Intuitive Truths & Surprises</h4>
          <ul class="summary-bullets">
            ${s.counterIntuitiveInsights.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    let mechanicsHtml = "";
    if (s.coreMechanics && s.coreMechanics.length > 0) {
      mechanicsHtml = `
        <div class="summary-section">
          <h4>🧠 Psychological Mechanics & Anatomy of Emotions</h4>
          <ul class="summary-bullets">
            ${s.coreMechanics.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    let exercisesHtml = "";
    if (s.keyExercises && s.keyExercises.length > 0) {
      exercisesHtml = `
        <div class="summary-section">
          <h4>🛠️ Key Exercises & Practical Blueprints</h4>
          <ul class="summary-bullets">
            ${s.keyExercises.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="summary-card-header">
        <div>
          <span class="meta-tag chapter-tag">${(s.id === "appendix" || s.chapterNumber === 11) ? "Appendix" : (s.chapterNumber <= 10 ? `Chapter ${s.chapterNumber}` : (book.id === "seven-principles" ? "Afterword" : `Chapter ${s.chapterNumber}`))}</span>
          <h3 class="summary-card-title">${s.title}</h3>
        </div>
        <button class="btn btn-outline btn-sm btn-quiz-this-chapter" data-chapter="${s.id}">
          Quiz This Chapter →
        </button>
      </div>

      <div class="summary-big-idea-box">
        <strong>The Big Idea:</strong> ${s.bigIdea}
      </div>

      ${counterIntuitiveHtml}
      ${mechanicsHtml}
      ${exercisesHtml}

      <div class="summary-takeaway">
        <span>💡</span> <em>"${s.keyTakeaway}"</em>
      </div>
    `;

    card.querySelector(".btn-quiz-this-chapter").addEventListener("click", () => {
      quizSpecificChapter(book, s.id);
    });

    dom.summariesContainer.appendChild(card);
  });

  showView("summaries");
}

function quizSpecificChapter(book, chapterId) {
  state.selectedBook = book;
  state.quizConfig = {
    mode: "practice",
    difficulty: "all",
    count: "all",
    selectedChapters: [chapterId]
  };
  startQuiz();
}

// ============================================================================
// VIEW 2: QUIZ CONFIGURATION
// ============================================================================
async function selectBookForQuiz(book) {
  state.selectedBook = book;

  dom.configBookIcon.textContent = book.icon || "📚";
  dom.configBookTitle.textContent = book.title;
  dom.configBookAuthor.textContent = book.author || "";

  dom.configChaptersList.innerHTML = "";
  if (book.chapters && book.chapters.length > 0) {
    book.chapters.forEach(ch => {
      const label = document.createElement("label");
      label.className = "chapter-checkbox-item";
      label.innerHTML = `
        <input type="checkbox" name="chapter" value="${ch.id}" checked>
        <span>${ch.name}</span>
      `;
      dom.configChaptersList.appendChild(label);
    });
  } else {
    dom.configChaptersList.innerHTML = `<p style="padding: 1rem; color: var(--text-muted);">All chapters will be included.</p>`;
  }

  showView("config");
}

function handleConfigSubmit(e) {
  e.preventDefault();

  const selectedChCheckboxes = dom.configChaptersList.querySelectorAll("input[name='chapter']:checked");
  const selectedChapters = Array.from(selectedChCheckboxes).map(cb => cb.value);

  if (selectedChCheckboxes.length > 0 && selectedChapters.length === 0) {
    alert("Please select at least one chapter to quiz on.");
    return;
  }

  state.quizConfig = {
    mode: dom.configMode.value,
    count: dom.configCount.value,
    difficulty: dom.configDifficulty.value,
    selectedChapters: selectedChapters
  };

  startQuiz();
}

// ============================================================================
// VIEW 3: QUIZ EXECUTION
// ============================================================================
async function startQuiz() {
  const allQuestions = await loadBookQuestions(state.selectedBook);

  if (!allQuestions || allQuestions.length === 0) {
    alert("No questions found for this book.");
    return;
  }

  let filtered = allQuestions;
  if (state.quizConfig.selectedChapters.length > 0) {
    filtered = filtered.filter(q => state.quizConfig.selectedChapters.includes(q.chapterId));
  }

  if (state.quizConfig.difficulty !== "all") {
    filtered = filtered.filter(q => q.difficulty === state.quizConfig.difficulty);
  }

  if (filtered.length === 0) {
    alert("No questions match your chosen filter. Please adjust chapter or difficulty selection.");
    return;
  }

  shuffleArray(filtered);

  if (state.quizConfig.count !== "all") {
    const limit = parseInt(state.quizConfig.count, 10);
    filtered = filtered.slice(0, limit);
  }

  state.activeQuestions = filtered;
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.userAnswers = [];
  state.isAnswerSubmitted = false;

  dom.quizLiveScore.textContent = "0";

  showView("quiz");
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  state.isAnswerSubmitted = false;
  const q = state.activeQuestions[state.currentQuestionIndex];
  const total = state.activeQuestions.length;
  const currentNum = state.currentQuestionIndex + 1;

  const progressPct = ((currentNum) / total) * 100;
  dom.quizProgressBar.style.width = `${progressPct}%`;
  dom.quizProgressText.textContent = `Question ${currentNum} of ${total}`;

  dom.qChapterBadge.textContent = q.chapterName || "General";
  dom.qDifficultyBadge.textContent = q.difficulty || "Medium";

  dom.qQuestionText.textContent = q.question;

  dom.qOptionsGrid.innerHTML = "";
  const keys = ["A", "B", "C", "D", "E", "F"];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = idx;
    btn.innerHTML = `
      <span class="option-key">${keys[idx] || (idx + 1)}</span>
      <span class="option-label">${optText}</span>
    `;

    btn.addEventListener("click", () => handleOptionSelect(idx));
    dom.qOptionsGrid.appendChild(btn);
  });

  dom.explanationBox.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleOptionSelect(selectedIndex) {
  if (state.isAnswerSubmitted) return;
  state.isAnswerSubmitted = true;

  const q = state.activeQuestions[state.currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctAnswer;

  if (isCorrect) {
    state.score += 1;
  }

  dom.quizLiveScore.textContent = state.score;

  state.userAnswers.push({
    question: q,
    selectedIndex: selectedIndex,
    isCorrect: isCorrect
  });

  const optionButtons = dom.qOptionsGrid.querySelectorAll(".option-btn");
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctAnswer) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  if (state.quizConfig.mode === "practice") {
    dom.explanationTitle.textContent = isCorrect ? "Insight Verified!" : "Deep Insight:";
    dom.explanationIcon.textContent = isCorrect ? "✅" : "💡";
    dom.explanationTitle.style.color = isCorrect ? "var(--accent-green)" : "var(--accent-amber)";
    dom.explanationText.textContent = q.explanation || "No explanation provided.";

    if (q.citation) {
      dom.citationPill.classList.remove("hidden");
      dom.citationText.textContent = q.citation;
    } else {
      dom.citationPill.classList.add("hidden");
    }

    const isLast = state.currentQuestionIndex === state.activeQuestions.length - 1;
    dom.btnNextQuestion.textContent = isLast ? "View Final Results →" : "Next Question →";

    dom.explanationBox.classList.remove("hidden");
    setTimeout(() => {
      dom.explanationBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 80);
  } else {
    setTimeout(() => {
      advanceQuestion();
    }, 450);
  }
}

function advanceQuestion() {
  if (state.currentQuestionIndex < state.activeQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    renderCurrentQuestion();
  } else {
    showResults();
  }
}

// ============================================================================
// VIEW 4: RESULTS & REVIEW
// ============================================================================
function showResults() {
  showView("results");

  const total = state.activeQuestions.length;
  const score = state.score;
  const percentage = Math.round((score / total) * 100);

  dom.resultsFinalScore.textContent = `${percentage}%`;
  dom.resultsRawScore.textContent = `${score} / ${total} Correct`;

  if (percentage >= 90) {
    dom.resultsTrophy.textContent = "🏆";
    dom.resultsGradeTitle.textContent = "Love Lab Master!";
    dom.resultsSubtitle.textContent = "Outstanding recall! You have internalized the psychological mechanics and core principles deeply.";
  } else if (percentage >= 75) {
    dom.resultsTrophy.textContent = "🌟";
    dom.resultsGradeTitle.textContent = "Profound Understanding!";
    dom.resultsSubtitle.textContent = "Great grasp of the concepts and nuances with just a few takeaways to review.";
  } else if (percentage >= 50) {
    dom.resultsTrophy.textContent = "📖";
    dom.resultsGradeTitle.textContent = "Good Foundations";
    dom.resultsSubtitle.textContent = "You have the main ideas. Read the chapter summaries to cement the counter-intuitive principles!";
  } else {
    dom.resultsTrophy.textContent = "🌱";
    dom.resultsGradeTitle.textContent = "Beginning the Journey";
    dom.resultsSubtitle.textContent = "Review the chapter study guide and test yourself again to build active recall.";
  }

  const missedCount = total - score;
  if (missedCount > 0) {
    dom.btnReviewMissed.classList.remove("hidden");
    dom.btnReviewMissed.textContent = `Practice Missed Only (${missedCount})`;
  } else {
    dom.btnReviewMissed.classList.add("hidden");
  }

  renderChapterBreakdown();
  renderDetailedReview();
}

function renderChapterBreakdown() {
  const breakdown = {};

  state.userAnswers.forEach(ans => {
    const chName = ans.question.chapterName || "General";
    if (!breakdown[chName]) {
      breakdown[chName] = { correct: 0, total: 0 };
    }
    breakdown[chName].total += 1;
    if (ans.isCorrect) breakdown[chName].correct += 1;
  });

  dom.resultsBreakdownList.innerHTML = "";
  Object.keys(breakdown).forEach(chName => {
    const data = breakdown[chName];
    const pct = Math.round((data.correct / data.total) * 100);

    const item = document.createElement("div");
    item.className = "breakdown-item";
    item.innerHTML = `
      <div class="breakdown-info">
        <span>${chName}</span>
        <span>${data.correct}/${data.total} (${pct}%)</span>
      </div>
      <div class="breakdown-bar-track">
        <div class="breakdown-bar-fill" style="width: ${pct}%; background: ${pct >= 75 ? 'var(--accent-green)' : pct >= 50 ? 'var(--accent-amber)' : 'var(--accent-red)'}"></div>
      </div>
    `;
    dom.resultsBreakdownList.appendChild(item);
  });
}

function renderDetailedReview() {
  dom.resultsReviewList.innerHTML = "";

  state.userAnswers.forEach((ans, idx) => {
    const q = ans.question;
    const card = document.createElement("div");
    card.className = `review-item-card ${ans.isCorrect ? 'is-correct' : 'is-incorrect'}`;

    const userSelectedText = q.options[ans.selectedIndex] || "No answer";
    const correctText = q.options[q.correctAnswer];

    card.innerHTML = `
      <div class="review-meta">
        <span>Q${idx + 1} • ${q.chapterName || ""}</span>
        <span style="color: ${ans.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}">
          ${ans.isCorrect ? '✓ Correct' : '✕ Missed'}
        </span>
      </div>
      <p class="review-question">${q.question}</p>
      <div class="review-answers">
        <div class="review-answer-row">
          <strong>Your Answer:</strong>
          <span style="color: ${ans.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}">${userSelectedText}</span>
        </div>
        ${!ans.isCorrect ? `
          <div class="review-answer-row">
            <strong>Correct Answer:</strong>
            <span style="color: var(--accent-green)">${correctText}</span>
          </div>
        ` : ''}
      </div>
      <div class="review-exp">
        <strong>Insight & Explanation:</strong> ${q.explanation}
        ${q.citation ? `<br><em>Citation: ${q.citation}</em>` : ''}
      </div>
    `;
    dom.resultsReviewList.appendChild(card);
  });
}

function practiceMissedOnly() {
  const missed = state.userAnswers.filter(a => !a.isCorrect).map(a => a.question);
  if (missed.length === 0) return;

  state.activeQuestions = missed;
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.userAnswers = [];
  state.isAnswerSubmitted = false;
  state.quizConfig.mode = "practice";

  dom.quizLiveScore.textContent = "0";

  showView("quiz");
  renderCurrentQuestion();
}

// ============================================================================
// IMPORT MODAL & CUSTOM BOOKS
// ============================================================================
function initImportModal() {
  dom.btnImportBook.addEventListener("click", () => {
    dom.modalImportBook.classList.remove("hidden");
  });

  dom.btnCloseImportModal.addEventListener("click", () => {
    dom.modalImportBook.classList.add("hidden");
  });

  const tabs = dom.modalImportBook.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      dom.modalImportBook.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));

      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.getElementById(target).classList.add("active");
    });
  });

  dom.fileInput.addEventListener("change", handleFileUpload);
  dom.btnSubmitPasted.addEventListener("click", handlePastedImport);
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      processImportedData(data, file.name.replace(".json", ""));
    } catch (err) {
      alert("Invalid JSON file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function handlePastedImport() {
  try {
    const metaText = dom.pasteBookMetadata.value.trim();
    const questionsText = dom.pasteQuestionsJson.value.trim();

    if (!questionsText) {
      alert("Please enter the questions JSON array.");
      return;
    }

    const questions = JSON.parse(questionsText);
    const meta = metaText ? JSON.parse(metaText) : {};

    processImportedData(questions, meta.id || "custom-book", meta);
  } catch (err) {
    alert("Error parsing JSON: " + err.message);
  }
}

function processImportedData(questions, defaultId, customMeta = {}) {
  if (!Array.isArray(questions) || questions.length === 0) {
    alert("Questions JSON must be a non-empty array of question objects.");
    return;
  }

  const bookId = customMeta.id || defaultId || `book-${Date.now()}`;
  const chaptersMap = {};

  questions.forEach(q => {
    if (q.chapterId && q.chapterName) {
      chaptersMap[q.chapterId] = q.chapterName;
    }
  });

  const chapters = Object.keys(chaptersMap).map(id => ({ id, name: chaptersMap[id] }));

  const newBook = {
    id: bookId,
    title: customMeta.title || defaultId.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    author: customMeta.author || "Imported Author",
    icon: customMeta.icon || "📘",
    description: customMeta.description || `Custom imported question bank with ${questions.length} questions.`,
    totalQuestions: `${questions.length} Questions`,
    chapters: chapters
  };

  localStorage.setItem(`bookquiz_questions_${bookId}`, JSON.stringify(questions));

  const existingCustom = JSON.parse(localStorage.getItem("bookquiz_custom_books") || "[]");
  const filtered = existingCustom.filter(b => b.id !== bookId);
  filtered.push(newBook);
  localStorage.setItem("bookquiz_custom_books", JSON.stringify(filtered));

  dom.modalImportBook.classList.add("hidden");
  alert(`Successfully imported "${newBook.title}" with ${questions.length} questions!`);

  loadBooks();
}

// ============================================================================
// EVENT LISTENERS & SHORTCUTS
// ============================================================================
function initEventListeners() {
  dom.themeToggle.addEventListener("click", toggleTheme);
  dom.navHome.addEventListener("click", () => showView("library"));
  dom.btnNavSummaries.addEventListener("click", () => openSummariesForBook(state.books[0]));
  dom.btnBackFromSummaries.addEventListener("click", () => showView("library"));
  dom.btnBackToLibrary.addEventListener("click", () => showView("library"));
  dom.btnReturnToLibrary.addEventListener("click", () => showView("library"));

  if (dom.btnReadSummariesFromConfig) {
    dom.btnReadSummariesFromConfig.addEventListener("click", () => openSummariesForBook(state.selectedBook));
  }

  dom.btnSelectAllChapters.addEventListener("click", () => {
    dom.configChaptersList.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = true);
  });

  dom.btnDeselectAllChapters.addEventListener("click", () => {
    dom.configChaptersList.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
  });

  dom.configMode.addEventListener("change", (e) => {
    dom.modeHint.textContent = e.target.value === "practice"
      ? "Shows immediate explanations, citations, and psychological takeaways after every question."
      : "Simulates an exam. All answers are graded and reviewed at the end.";
  });

  dom.quizConfigForm.addEventListener("submit", handleConfigSubmit);

  dom.btnQuitQuiz.addEventListener("click", () => {
    if (confirm("Are you sure you want to quit this quiz? Your current progress will be lost.")) {
      showView("library");
    }
  });

  dom.btnNextQuestion.addEventListener("click", advanceQuestion);
  dom.btnRetakeQuiz.addEventListener("click", startQuiz);
  dom.btnReviewMissed.addEventListener("click", practiceMissedOnly);

  window.addEventListener("keydown", (e) => {
    if (!views.quiz.classList.contains("active")) return;

    if (!state.isAnswerSubmitted) {
      if (["1", "a", "A"].includes(e.key)) handleOptionSelect(0);
      else if (["2", "b", "B"].includes(e.key)) handleOptionSelect(1);
      else if (["3", "c", "C"].includes(e.key)) handleOptionSelect(2);
      else if (["4", "d", "D"].includes(e.key)) handleOptionSelect(3);
    } else {
      if (e.key === "Enter" || e.key === " ") {
        advanceQuestion();
      }
    }
  });

  initImportModal();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

document.addEventListener("DOMContentLoaded", initApp);
