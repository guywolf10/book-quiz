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
      "Because marriage contracts are legally non-binding in court.",
      "Because happy spouses give freely without tracking immediate reciprocity; a mental ledger of debts only appears when emotional safety and trust have collapsed.",
      "Because keeping score requires too much mathematical calculation.",
      "Because reciprocal trades only work for financial issues, not emotional ones."
    ],
    "correctAnswer": 1,
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
      "Because active listening requires an advanced degree in psychology to master.",
      "Because when spouses are emotionally flooded in fight-or-flight, the prefrontal cortex shuts down, making calm, empathetic mirroring biologically almost impossible.",
      "Because active listening makes spouses become overly dependent on each other."
    ],
    "correctAnswer": 2,
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
      "At least 5:1 during conflict discussions (and 20:1 during everyday life)",
      "Exactly 10:1 during all interactions",
      "Negative interactions must be 0:1 (completely eliminated)"
    ],
    "correctAnswer": 1,
    "explanation": "Gottman discovered that in stable, happy marriages, there are at least 5 positive interactions (a smile, nod, touch, joke, or validation) for every 1 negative interaction during conflict. Outside of conflict, in casual day-to-day life, the ratio jumps to an astonishing 20 to 1.",
    "citation": "Chapter 1: Innovative Research, Revolutionary Findings"
  },
  {
    "id": "dq4",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "hard",
    "type": "concept",
    "question": "What occurs when a couple enters 'Negative Sentiment Override' (NSO) and checks into the 'Roach Motel for Lovers'?",
    "options": [
      "They stop speaking for at least thirty days.",
      "An absorbing filter of distrust distorts perception so that even neutral or positive gestures by the spouse are interpreted as hostile, selfish, or manipulative.",
      "They begin booking separate vacations without consulting each other.",
      "They actively hire private investigators to monitor each other."
    ],
    "correctAnswer": 1,
    "explanation": "In Negative Sentiment Override, the emotional filter is set to suspicion. If a spouse in NSO says 'I cooked dinner tonight,' the partner doesn't hear a loving gesture; they think 'What are you trying to guilt-trip me into doing?' It is an absorbing state that traps couples in a zero-sum war of attrition.",
    "citation": "Chapter 2: Building Your Sound Relationship House"
  },
  {
    "id": "dq5",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Sound Relationship House & Emotional Intelligence",
    "difficulty": "medium",
    "type": "concept",
    "question": "According to Gottman’s research on trust, how does he define 'betrayal' in its broadest and most destructive sense?",
    "options": [
      "Strictly as a physical sexual affair with another person.",
      "Any ongoing choice, habit, or life decision that fails to prioritize the partnership and put the spouse 'before all others' (e.g., emotional withdrawal, siding with a parent, chronic broken promises).",
      "Disclosing marital arguments to close friends.",
      "Opening an individual savings account without informing the other."
    ],
    "correctAnswer": 1,
    "explanation": "While physical infidelity is devastating, Gottman points out that nonsexual betrayals (emotional coldness, chronic absenteeism, siding with parents against a spouse, breaking promises) destroy trust just as completely. Betrayal lies at the core of all failed relationships.",
    "citation": "Chapter 2: Building Your Sound Relationship House"
  },
  {
    "id": "dq6",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "easy",
    "type": "concept",
    "question": "What is the crucial psychological distinction between a 'Complaint' and a 'Criticism'?",
    "options": [
      "A complaint is spoken softly, whereas a criticism is shouted loudly.",
      "A complaint focuses on a specific action, event, or behavior, whereas a criticism attacks the partner’s global personality, character, or motives.",
      "A complaint is written in a letter, while a criticism is spoken face-to-face.",
      "There is no difference; Gottman uses them interchangeably."
    ],
    "correctAnswer": 1,
    "explanation": "A healthy complaint targets a specific situation: 'I\\'m upset that you didn\\'t take out the garbage tonight as promised.' A criticism adds global character assassination: 'You didn\\'t take out the garbage because you are lazy and you never care about anyone but yourself.'",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq7",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why is Contempt the deadliest of the Four Horsemen, and what shocking physical health consequence was discovered in partners who receive it?",
    "options": [
      "It causes immediate vocal cord paralysis in arguments.",
      "It conveys moral superiority and disgust, and its psychological toxicity actually suppresses the immune system of the receiving spouse, leading to more infectious illnesses (colds, flu).",
      "It leads to permanent hearing loss due to shouting.",
      "It only impacts couples who have been married for more than twenty years."
    ],
    "correctAnswer": 1,
    "explanation": "Contempt (eye-rolling, sneering, mockery, hostile sarcasm) attacks the partner\\'s sense of self-worth from a position of superiority. Gottman found it is the #1 predictor of divorce and so physically toxic that the recipient experiences measurable immune system decline and frequent infectious illnesses.",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq8",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the true antidote to Defensiveness, and why is it so psychologically disarming in an argument?",
    "options": [
      "Explaining your motives in extensive detail so your partner sees you were innocent.",
      "Taking responsibility for at least a small part of the problem (even 1-2%), which validates the partner\\'s grievance and halts the escalation.",
      "Walking out of the room immediately without saying a word.",
      "Demanding that your partner apologize first before you respond."
    ],
    "correctAnswer": 1,
    "explanation": "Defensiveness (making excuses, playing the victim, cross-complaining) never calms a conflict; it only escalates it. The antidote is accepting responsibility for your part: 'You\\'re right, I dropped the ball on that. I\\'m sorry.' Owning even 2% immediately de-escalates tension.",
    "citation": "Chapter 3: The Second Sign: The Four Horsemen"
  },
  {
    "id": "dq9",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why are 85% of stonewallers in heterosexual relationships men, and what biological imperative drives this behavior?",
    "options": [
      "Men are inherently vindictive and use silence as an offensive weapon.",
      "Male cardiovascular systems react more intensely to stress (faster heart rate spike, more adrenaline) and recover much slower than women's; men stonewall as a biological defense against physical flooding.",
      "Men possess fewer linguistic centers in the brain and run out of words after ten minutes.",
      "Men are socially conditioned to never express emotion in private."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman demonstrated that stonewalling is an act of physiological survival, not passive-aggressive malice. Men flood at lower emotional thresholds than women and take far longer to metabolize stress hormones. When overwhelmed, a man shuts down and stares blankly to prevent his heart rate from skyrocketing into dangerous arrhythmias.",
    "citation": "Chapter 3: Men and Women Really Are Different"
  },
  {
    "id": "dq10",
    "chapterId": "ch3",
    "chapterName": "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen",
    "difficulty": "medium",
    "type": "concept",
    "question": "What physiological threshold defines 'Flooding', and what happens to the human brain once this state is entered?",
    "options": [
      "Blood pressure drops to near fainting levels.",
      "Heart rate accelerates past roughly 100 bpm, fight-or-flight hormones flood the bloodstream, and higher-order cortical processing shuts down, making creative compromise impossible.",
      "Body temperature rises by 3 degrees, causing temporary amnesia.",
      "Breathing slows down to less than four breaths per minute."
    ],
    "correctAnswer": 1,
    "explanation": "When heart rate exceeds 100 bpm (or ~80 bpm for trained athletes), adrenaline and cortisol saturate the bloodstream. The prefrontal cortex (responsible for empathy, logic, and nuance) goes offline, replaced by primitive fight-or-flight reflexes. Productive communication is biologically impossible while flooded.",
    "citation": "Chapter 3: The Third Sign: Flooding"
  },
  {
    "id": "dq11",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In the opening of Chapter 4, Dr. Rory is an intellectually brilliant pediatrician running an intensive care unit for babies, yet his wife Lisa feels deeply unloved. What was Rory's shocking blind spot?",
    "options": [
      "He secretly gambled away the family\\'s savings.",
      "He didn\\'t know the name of the family dog, didn\\'t know the names of his children\\'s friends, and had to ask his wife which door led to the backyard.",
      "He refused to attend medical conferences with her.",
      "He insisted on homeschooling the children without her consent."
    ],
    "correctAnswer": 1,
    "explanation": "Dr. Rory had tremendous cognitive capability, but zero 'cognitive room' reserved for his home life. He was so consumed by his hospital work that he knew nothing of the basics of his wife\\'s daily reality, leaving her feeling invisible and completely devalued.",
    "citation": "Chapter 4: Principle 1: Enhance Your Love Maps"
  },
  {
    "id": "dq12",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Alyson Shapiro’s study on first-time parents, what was the defining differentiator between the 67% of couples whose marital satisfaction plummeted and the 33% who remained happy or improved?",
    "options": [
      "The happy couples hired outside nannies and night nurses.",
      "The happy couples had detailed, deeply established Love Maps before the baby arrived, which acted as a shock absorber during the upheaval.",
      "The happy couples agreed to never discipline the child in front of each other.",
      "The happy couples earned significantly higher household incomes."
    ],
    "correctAnswer": 1,
    "explanation": "Having a baby creates enormous stress, sleep deprivation, and identity shifts. Couples whose love maps were detailed and current were intimately familiar with each other\\'s feelings and fears; the sudden shock of parenthood could not dislodge their deep emotional connection.",
    "citation": "Chapter 4: In Knowledge There Is Strength"
  },
  {
    "id": "dq13",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Principle 1 - Enhance Your Love Maps",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Exercise 3 ('Who Am I?'), Gottman moves beyond favorite foods and friends into deep psychological mapping. Which of the following is one of the profound sections in this exercise?",
    "options": [
      "My Net Worth and Investment Strategy",
      "Injuries and Healing (past psychological wounds, traumas, disappointments, and how they shape adult vulnerabilities)",
      "My Ideal Architectural Home Layout",
      "My Five-Year Career Ladder Plan"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Who Am I?' exercise explores: 1) Triumphs and Strivings, 2) Injuries and Healing (childhood scars, past betrayals, feeling unloved), 3) My Emotional World, 4) My Mission and Legacy, and 5) Who I Want to Become. Understanding past wounds explains present emotional triggers.",
    "citation": "Chapter 4: Exercise 3: Who Am I?"
  },
  {
    "id": "dq14",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the fundamental difference in the daily 'cognitive scanning habit' between partners in happy marriages versus partners in distressed marriages?",
    "options": [
      "Distressed partners scan financial news; happy partners scan social media.",
      "Distressed partners scan their spouse for mistakes to catch them doing something wrong; happy partners scan the environment for things to appreciate to catch their spouse doing something right.",
      "Happy partners ignore all flaws, whereas distressed partners seek total perfection.",
      "Distressed partners communicate in writing, while happy partners speak aloud."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman emphasizes that fondness and admiration are mental habits. In distressed relationships, spouses develop a hyper-vigilant cognitive bias looking for partner failures. In healthy relationships, spouses actively scan for what is working and express gratitude for small daily acts.",
    "citation": "Chapter 5: Principle 2: Nurture Your Fondness and Admiration"
  },
  {
    "id": "dq15",
    "chapterId": "ch5",
    "chapterName": "Ch 5: Principle 2 - Nurture Fondness & Admiration",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Gottman’s Oral History Interview, with what statistical accuracy could he predict marital stability based solely on HOW couples recalled the early history of their courtship and marriage?",
    "options": [
      "50% (no better than flipping a coin)",
      "94% accuracy—couples who recall their early days with warmth, humor, and pride almost always stay together, while those who recall the past with bitterness or blankness usually divorce",
      "70% accuracy, but only if they had wedding photos present",
      "It had zero predictive power compared to current conflict discussions"
    ],
    "correctAnswer": 1,
    "explanation": "The Oral History Interview showed that how a couple views their past reflects their present emotional state. When fondness is intact, they remember early struggles as triumphs conquered together. When fondness is dead, they rewrite their history negatively ('We never should have gotten married').",
    "citation": "Chapter 5: Learning from History"
  },
  {
    "id": "dq16",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Chapter 6, what profound psychological insight does Gottman reveal about the true root of SADNESS?",
    "options": [
      "Sadness is simply repressed anger that has been turned inward.",
      "Sadness stems from feeling that you have LOST someone or something; when your partner is sad, you should ask 'What is missing?' rather than trying to cheer them up.",
      "Sadness is a biological sign of clinical depression requiring immediate psychiatric intervention.",
      "Sadness is caused by unrealistic romantic expectations."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman explains that at the core of sadness is a sense of loss—whether losing a person, a dream, a sense of closeness, or an expectation. When your spouse is sad, asking 'Do you feel like you\\'ve lost something?' or 'What is missing?' helps them articulate their grief. Trying to cheer them up dismisses their experience.",
    "citation": "Chapter 6: Extra Tips for Listening to Sadness and Crying"
  },
  {
    "id": "dq17",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What metaphor does Gottman use to describe how you should listen when your partner is experiencing deep sadness or crying?",
    "options": [
      "Be like a lifeguard jumping into the water to rescue a drowning swimmer.",
      "Be like a traveler visiting the foreign landscape of sadness, with your partner serving as the tour guide.",
      "Be like an impartial courtroom judge listening to legal testimonies.",
      "Be like a mirror that silently reflects the partner\\'s posture."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman writes: 'Imagine that you\\'re a traveler visiting the landscape of sadness. Your partner is the tour guide. This sort of being there when your partner is blue will bring you closer than the standard, Don\\'t cry!\\'' Don't try to terraform their landscape; simply accompany them through it.",
    "citation": "Chapter 6: Extra Tips for Listening to Sadness and Crying"
  },
  {
    "id": "dq18",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the psychological origin of ANGER according to Gottman, and what should you search for when your partner is furious?",
    "options": [
      "Anger is a genetic trait that cannot be modulated.",
      "Behind most anger is the feeling of being BLOCKED from reaching a goal or having a boundary violated; your job is to search out the blocked goal and the obstacle without telling them to 'calm down.'",
      "Anger is always caused by low blood sugar or lack of sleep.",
      "Anger indicates that the partner has fallen out of love with you."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman explains that anger arises when someone feels thwarted from achieving an ambition or having their needs met. Telling an angry person to 'calm down' invalidates their goal. Instead, ask: 'What goal feels blocked right now, and what is the obstacle in your way?'",
    "citation": "Chapter 6: Extra Tips for Listening to Anger"
  },
  {
    "id": "dq19",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "hard",
    "type": "concept",
    "question": "What does FEAR or anxiety signify according to Gottman, and why is saying 'Don't be silly, there's nothing to be afraid of' so destructive?",
    "options": [
      "Fear is an evolutionary defect that modern humans must suppress.",
      "Fear signifies that the person feels their everyday world is not safe; dismissing it with 'there\\'s nothing to fear' feels like ridicule and severs emotional safety.",
      "Fear means the partner is hiding a deep financial secret.",
      "Fear only occurs in partners with generalized anxiety disorder."
    ],
    "correctAnswer": 1,
    "explanation": "Citing Gavin de Becker's 'The Gift of Fear,' Gottman explains that fear indicates a person\\'s fundamental sense of safety is threatened. Even small worries indicate an unsafe environment. Validating their gut instinct creates safety; dismissing it leaves them isolated.",
    "citation": "Chapter 6: Extra Tip for Listening to Fear and Stress"
  },
  {
    "id": "dq20",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away",
    "difficulty": "medium",
    "type": "concept",
    "question": "In the daily 'Stress-Reducing Conversation', what is Haim Ginott's golden rule that Gottman emphasizes above all else?",
    "options": [
      "'Always split the bill 50/50.'",
      "'Understanding must precede advice.'",
      "'Never go to bed angry.'",
      "'Speak only when spoken to.'"
    ],
    "correctAnswer": 1,
    "explanation": "Psychologist Haim Ginott\\'s cardinal rule is: 'Understanding must precede advice.' When a partner vents about external stress, offering immediate solutions sends the message: 'You are incompetent, and your feelings are an annoyance I want to fix.' Empathy and validation must come first.",
    "citation": "Chapter 6: Exercise 2: The Stress-Reducing Conversation"
  },
  {
    "id": "dq21",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "concept",
    "question": "What critical statistic did Gottman discover regarding husbands who learn to share power and accept influence from their wives?",
    "options": [
      "They report feeling emasculated in 75% of cases.",
      "The likelihood that their marriage will end in divorce drops by 81%.",
      "Their arguments increase by 40% due to over-communication.",
      "It has no measurable statistical effect on divorce rates."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman found that while the vast majority of wives already accept influence from their husbands, 65% of men fail to accept influence from their wives. When a man masters this skill, treating his wife\\'s opinions and needs with equal weight, the chance of divorce drops by a massive 81%.",
    "citation": "Chapter 7: Principle 4: Let Your Partner Influence You"
  },
  {
    "id": "dq22",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Principle 4 - Let Your Partner Influence You",
    "difficulty": "medium",
    "type": "scenario",
    "question": "In Chapter 7, how does an 'emotionally intelligent husband' respond when his wife says: 'Do you have to work this Saturday? We promised my brother we’d visit'?",
    "options": [
      "He snaps: 'I pay the bills around here, so my job comes first!'",
      "He says: 'I know we promised him, and I really want to go, but this client deadline is brutal. Can we look at our schedules and see if we can go Sunday instead?'",
      "He gives her the silent treatment and walks away.",
      "He cancels his work shift immediately without checking the consequences."
    ],
    "correctAnswer": 1,
    "explanation": "Accepting influence is not about spineless submission; it is about honoring the validity of your partner\\'s stance and collaborating on solutions: 'I understand why this matters to you, here is my dilemma, let\\'s solve this as a team.'",
    "citation": "Chapter 7: Emotionally Intelligent Husbands"
  },
  {
    "id": "dq23",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "hard",
    "type": "concept",
    "question": "Gottman’s research made the astonishing discovery that 69% of all marital conflicts are 'perpetual.' What is the profound philosophical implication of this finding?",
    "options": [
      "That nearly 70% of married couples are fundamentally mismatched and should consider divorce.",
      "That you never marry a person without also marrying a specific, enduring set of unresolvable differences; the goal is not to eliminate them, but to live with them in gentle dialogue and humor.",
      "That human beings become completely incapable of behavioral change after age thirty.",
      "That couples should never discuss conflict topics again once identified."
    ],
    "correctAnswer": 1,
    "explanation": "69% of arguments stem from core differences in personality, lifestyle, emotional needs, and values (e.g., neat vs. messy, spender vs. saver, introvert vs. extrovert). You will never 'fix' them. Healthy couples accept this reality and learn to laugh and talk about them with affection instead of gridlock.",
    "citation": "Chapter 8: Perpetual Problems"
  },
  {
    "id": "dq24",
    "chapterId": "ch8",
    "chapterName": "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the key differentiator that separates a healthy dialogue about a perpetual problem from a 'gridlocked' conflict?",
    "options": [
      "Whether the couple has hired a mediator.",
      "In healthy dialogue, humor, affection, and mutual acceptance are present; in gridlock, partners feel rejected, villainize each other, become entrenched, and strip all warmth from the issue.",
      "The duration of the argument in minutes.",
      "Whether the topic involves money or sex."
    ],
    "correctAnswer": 1,
    "explanation": "Happy couples have the same perpetual fights as unhappy couples! The difference is emotional climate. Happy couples can joke about their differences ('Here you go again with your spreadsheets!') whereas gridlocked couples feel unloved, judged, and fundamentally rejected.",
    "citation": "Chapter 8: The Signs of Gridlock"
  },
  {
    "id": "dq25",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "During Step 3 of problem solving ('Soothe Yourself and Each Other'), Gottman mandates a break of at least 20 minutes when flooded. What is the STRICT condition that must be maintained during these 20 minutes?",
    "options": [
      "You must write down a bulleted list of your partner\\'s errors.",
      "You must NOT spend the time ruminating on self-righteous indignation or rehearsing angry comebacks; you must actively distract yourself (read, walk, breathe) so your heart rate can drop.",
      "You must remain in the exact same room staring at each other.",
      "You must call a close friend or family member to validate your stance."
    ],
    "correctAnswer": 1,
    "explanation": "If you take a 20-minute break but spend the entire time fuming ('How dare she say that! Wait till I tell her...'), your adrenaline will remain elevated and your heart will keep pounding. The break only works if you mentally disconnect and physiologically calm your nervous system.",
    "citation": "Chapter 9: Step 3: Soothe Yourself and Each Other"
  },
  {
    "id": "dq26",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "In Step 4 ('Compromise'), how does Gottman’s 'Two Concentric Circles' exercise structure negotiation?",
    "options": [
      "The inner circle is for domestic tasks, and the outer circle is for financial expenses.",
      "Each spouse draws a small inner circle for their non-negotiable core needs / values, and a large outer ring for areas where they have flexibility and room to give.",
      "The inner circle represents the husband\\'s position, and the outer circle represents the wife\\'s position.",
      "The inner circle is what you agree on today, and the outer circle is ignored forever."
    ],
    "correctAnswer": 1,
    "explanation": "Negotiation fails when spouses treat every minor preference as a sacred non-negotiable. The two-circle method forces each partner to define: 'What is the absolute core need I cannot abandon without betraying myself?' (inner circle) versus 'Where can I be flexible and accommodate you?' (outer circle).",
    "citation": "Chapter 9: Step 4: Compromise"
  },
  {
    "id": "dq27",
    "chapterId": "ch9",
    "chapterName": "Ch 9: Principle 5 - Solve Your Solvable Problems",
    "difficulty": "hard",
    "type": "concept",
    "question": "In Step 5 ('Processing a Regrettable Incident or Past Bad Fight'), what is the foundational ground rule regarding 'Realities'?",
    "options": [
      "Spouses must agree on one objective timeline of what actually occurred.",
      "Both partners must accept that there is NO single objective truth; two conflicting subjective perceptions can both be 100% valid.",
      "The person who started the fight is legally considered in the wrong.",
      "All text messages sent during the fight must be read aloud verbatim."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman explains: 'Do not debate facts. In an emotional incident, perception is everything.' Healing requires both partners to acknowledge that their partner\\'s emotional reality is just as authentic as their own, even if their factual memories clash completely.",
    "citation": "Chapter 9: Step 5: Dealing with Emotional Injuries"
  },
  {
    "id": "dq28",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "When in-laws criticize a spouse or cause tension in the marriage, what is Gottman’s uncompromising decree regarding marital allegiance?",
    "options": [
      "Spouses should respect their elders and encourage their partner to obey parental wishes.",
      "The spouse whose family is causing friction must side unequivocally with their partner against their own parents—marital solidarity ('we against the world') overrides family of origin.",
      "Spouses should remain completely neutral and let the partner argue with the in-laws directly.",
      "Couples should immediately move to a different country."
    ],
    "correctAnswer": 1,
    "explanation": "Gottman writes: 'A husband must side with his wife against his mother. The task here is to establish a we-against-the-world alliance.' If a spouse allows their parents to criticize or undermine their mate, they commit a fundamental betrayal of marital trust.",
    "citation": "Chapter 10: Relations with In-Laws"
  },
  {
    "id": "dq29",
    "chapterId": "ch10",
    "chapterName": "Ch 10: Coping with Typical Solvable Problems",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the psychological golden rule when refusing sex gently in a marriage according to Gottman?",
    "options": [
      "Pretend to be asleep before your partner enters the bedroom.",
      "Never say no without simultaneously showing physical affection (a kiss, embrace) and offering a concrete commitment for when you will reconnect.",
      "Explain in extensive biological detail why your libido is currently suppressed.",
      "Offer to pay for a massage instead."
    ],
    "correctAnswer": 1,
    "explanation": "A cold, dismissive 'no' feels like total romantic rejection. Gottman counsels: always wrap a refusal in physical warmth, appreciation, and tenderness, coupled with a specific timeline: 'I\\'m exhausted tonight, my love, but I want to be close to you. Let\\'s make Sunday afternoon just for the two of us.'",
    "citation": "Chapter 10: Refusing Sex Gently"
  },
  {
    "id": "dq30",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the profound core truth behind Principle 6: What actually fuels every gridlocked, irreconcilable fight?",
    "options": [
      "Severe hormonal and biochemical imbalances.",
      "An unacknowledged, unrespected life dream (aspirations, identity, emotional safety, or legacy) buried underneath the surface argument.",
      "A lack of formal legal agreements drawn up before marriage.",
      "Unresolved rivalries from high school."
    ],
    "correctAnswer": 1,
    "explanation": "Gridlock happens when a conflict touches on who you are at your core. The argument isn\\'t about the kitchen remodel or buying an expensive horse (the Daphne case)—it is about freedom, peace, honoring your parents, competence, or childhood dreams of adventure. When dreams feel ridiculed or denied, partners dig in.",
    "citation": "Chapter 11: Principle 6: Overcome Gridlock"
  },
  {
    "id": "dq31",
    "chapterId": "ch11",
    "chapterName": "Ch 11: Principle 6 - Overcome Gridlock",
    "difficulty": "hard",
    "type": "concept",
    "question": "What is the role of the listener when using 'The Dream Catcher’s Magic Questions' to unlock a gridlocked issue?",
    "options": [
      "To audit the budget and cross-examine whether the dream is affordable.",
      "To act like a non-judgmental interviewer or detective, uncovering what the dream symbolizes and its backstory, without trying to solve or debate it.",
      "To promise to grant 100% of the dream immediately regardless of personal sacrifice.",
      "To psychoanalyze the partner\\'s attachment style."
    ],
    "correctAnswer": 1,
    "explanation": "In the Dream Catcher exercise, the listener does NOT debate. They ask: 'What does this issue symbolize for you? What is the story behind this from your childhood? What is your ideal dream here?' Once a person feels their dream is deeply understood and respected, gridlock evaporates.",
    "citation": "Chapter 11: The Dream Catcher’s Magic Questions"
  },
  {
    "id": "dq32",
    "chapterId": "ch12",
    "chapterName": "Ch 12: Principle 7 - Create Shared Meaning",
    "difficulty": "medium",
    "type": "concept",
    "question": "What are the 'Four Pillars of Shared Meaning' that elevate a marriage into a shared spiritual journey?",
    "options": [
      "Wealth, Health, Fame, and Legacy",
      "Rituals of Connection, Support for Each Other’s Roles, Shared Goals, and Shared Values/Symbols",
      "Nutrition, Sleep, Physical Fitness, and Mindfulness",
      "Passionate Sex, Frequent Travel, Shared Hobbies, and Early Retirement"
    ],
    "correctAnswer": 1,
    "explanation": "A marriage is a micro-culture with its own internal mythology. The four pillars are: 1) Rituals of connection (recurring routines that bond you), 2) Support for roles (what it means to be a husband/wife/parent), 3) Shared goals (missions you work toward together), and 4) Shared values and symbols.",
    "citation": "Chapter 12: The Four Pillars of Shared Meaning"
  },
  {
    "id": "dq33",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "easy",
    "type": "concept",
    "question": "Why does Gottman recommend a kiss that lasts at least SIX SECONDS during the daily reunion at the end of the workday?",
    "options": [
      "Because shorter kisses are legally considered handshakes.",
      "Because a six-second kiss is long enough to stop the rush of daily stress, release oxytocin, and create a momentary sanctuary that is worth coming home to.",
      "Because it takes six seconds to burn off calories from lunch.",
      "Because six seconds is the average human attention span."
    ],
    "correctAnswer": 1,
    "explanation": "A quick peck on the cheek is often done while looking at your phone or setting down groceries. A six-second kiss requires conscious focus, interrupts the nervous system\\'s stress cycle, and communicates: 'I see you, you matter, and I am glad to be back with you.'",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq34",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "hard",
    "type": "concept",
    "question": "In the weekly 1-hour 'State of the Union' meeting, how does Gottman structure the dialogue to guarantee safety and prevent escalation?",
    "options": [
      "Spouses list all weekly grievances, vote on who was wrong, and the loser pays for dinner.",
      "Begin with what went right and express 5 specific appreciations, address issues using softened start-up and the two-circle method, process any regrettable incident, and conclude with 'What can I do to make you feel loved this coming week?'",
      "Review the family calendar and balance checking accounts for 60 minutes in silence.",
      "Exchange handwritten critiques of each other\\'s parenting style."
    ],
    "correctAnswer": 1,
    "explanation": "The State of the Union meeting is a sacred ritual. By starting with 5 sincere, specific appreciations, couples prime positive sentiment. Then they tackle issues gently with two-circle compromises, and end with the loving, forward-looking question: 'What can I do to make you feel loved this coming week?'",
    "citation": "Afterword: The Magic Six Hours"
  },
  {
    "id": "dq35",
    "chapterId": "afterword",
    "chapterName": "Afterword: The Magic Six Hours & Daily Habits",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the counter-intuitive discovery behind the 'Marital Poop Detector' in the Afterword?",
    "options": [
      "Happy couples ignore minor annoyances and have high tolerance for bad moods.",
      "Happy couples actually have a LOW threshold for negativity—they voice small irritations early with softened start-up rather than letting resentment fester beneath the surface.",
      "Spouses should hire cleaning services to eliminate arguments over pet care.",
      "Unhappy couples complain too early, while happy couples wait until anniversaries."
    ],
    "correctAnswer": 1,
    "explanation": "Popular culture tells us: 'Pick your battles, let small things go.' But Gottman found the opposite: happy couples have a vigilant 'Marital Poop Detector.' They don\\'t sweep low-level grievances under the rug; they air them gently and early, ensuring small irritations never metastasize into lethal contempt.",
    "citation": "Afterword: The Marital Poop Detector"
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
    "question": "According to Daniel Kahneman’s dual-system framework described in Thinking, Fast and Slow, how do System 1 and System 2 interact during a negotiation?",
    "options": [
      "System 1 and System 2 operate completely independently and never influence one another.",
      "System 1 is fast, emotional, and instinctive; its inchoate impressions and feelings are the spring that feeds the deliberate choices and rationalizations of System 2.",
      "System 2 makes all the rapid subconscious choices, while System 1 verifies them with deliberate logic.",
      "System 1 only activates during extreme physical trauma, whereas System 2 governs 99% of verbal negotiations."
    ],
    "correctAnswer": 1,
    "explanation": "System 1 is our animal mind—fast, emotional, automatic, and subconscious. System 2 is slow, deliberate, and effortful. Kahneman demonstrated that System 1's feelings and impressions are the wellspring that feeds the explicit choices of System 2. If you know how to influence your counterpart's System 1 emotional underpinnings through tone and framing, you guide how their System 2 rationalizes the outcome.",
    "citation": "Chapter 1: The New Rules - Heart vs. Mind"
  },
  {
    "id": "nsv-q05",
    "chapterId": "ch2",
    "chapterName": "Ch 2: Be a Mirror (Voices & Isopraxism)",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is 'mirroring' (isopraxism) in Chris Voss’s negotiation framework, and how does it function psychologically?",
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
      "The 'Late-Night FM DJ voice'—a calm, slow, deep, downward-inflecting tone that communicates steady authority.",
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
    "question": "Your boss storms into your office and snaps: 'We cannot approve this budget because the client’s software integration is totally unworkable!' What is the correct 4-step sequence to mirror her statement according to Voss?",
    "options": [
      "Use the FM DJ voice, say 'I'm sorry, totally unworkable?', and then remain completely silent for at least 4 seconds.",
      "Say 'I hear you,' and counter-offer by asking for 10% less budget.",
      "Immediately reply: 'I disagree that it is unworkable, let me show you the test results.'",
      "Smile, say 'You think it is unworkable?', and immediately explain three reasons why the client is mistaken."
    ],
    "correctAnswer": 0,
    "explanation": "The 4-step mirroring routine is: 1) Adopt the Late-Night FM DJ or playful voice; 2) Start with an apology ('I'm sorry...'); 3) Mirror the critical 1-3 words with an inquisitive inflection ('...totally unworkable?'); 4) Maintain Dynamic Silence (at least 4 seconds) to let the counterpart expand and explain their underlying reasoning.",
    "citation": "Chapter 2: Be a Mirror - How to Confront—and Get Your Way—Without Confrontation"
  },
  {
    "id": "nsv-q09",
    "chapterId": "ch3",
    "chapterName": "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)",
    "difficulty": "medium",
    "type": "concept",
    "question": "How does 'Tactical Empathy' differ fundamentally from ordinary empathy, sympathy, or compassion?",
    "options": [
      "Tactical empathy requires agreeing with the other person’s morals and adopting their value system.",
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
    "chapterName": "Ch 4: Beware 'Yes' — Master 'No'",
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
    "citation": "Chapter 4: Beware “Yes”—Master “No” - “Yes” Is Great, but “No” Is Better"
  },
  {
    "id": "nsv-q14",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' — Master 'No'",
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
    "citation": "Chapter 4: Beware “Yes”—Master “No” - “No” Starts the Negotiation"
  },
  {
    "id": "nsv-q15",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' — Master 'No'",
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
    "citation": "Chapter 4: Beware “Yes”—Master “No” - The Persuasive Power of “No”"
  },
  {
    "id": "nsv-q16",
    "chapterId": "ch4",
    "chapterName": "Ch 4: Beware 'Yes' — Master 'No'",
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
    "citation": "Chapter 4: Beware “Yes”—Master “No” - The 1-Line Email"
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
    "citation": "Chapter 5: Trigger the Two Words That Immediately Transform Any Negotiation - 'That’s Right'"
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
      "He repeatedly summarized Sabaya’s religious grievances and historical narrative of Muslim oppression until Sabaya exclaimed 'That's right!', transforming the dialogue from threats to workable logistics.",
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
    "question": "How does Daniel Kahneman and Amos Tversky’s 'Prospect Theory' and the concept of 'Loss Aversion' dictate how deals should be framed?",
    "options": [
      "People are strictly motivated by maximizing mathematical expected utility.",
      "People experience roughly twice as much psychological pain from a loss as they do pleasure from an equivalent gain; therefore, framing an offer around what they stand to lose by not agreeing is far more persuasive than showing what they will gain.",
      "Negotiators should always take high-risk gambles when they are already winning.",
      "Loss aversion only affects retail consumers buying consumer electronics, not B2B executives."
    ],
    "correctAnswer": 1,
    "explanation": "Prospect Theory established that humans are loss-averse: the pain of losing $10,000 is twice as intense as the joy of gaining $10,000. In negotiation, framing inaction as a tangible loss ('If we don't complete this integration by Q3, your division risks losing $200,000 in redundant licensing fees') bends reality far more effectively than touting future gains.",
    "citation": "Chapter 6: Bend Their Reality - Don’t Compromise / Loss Aversion"
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
    "citation": "Chapter 6: Bend Their Reality - Don’t Compromise"
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
    "citation": "Chapter 6: Bend Their Reality - The F-Word: Why It’s So Powerful, How to Use It, and How to Defend Against It"
  },
  {
    "id": "nsv-q23",
    "chapterId": "ch6",
    "chapterName": "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')",
    "difficulty": "medium",
    "type": "scenario",
    "question": "When negotiating a new salary package, how can you effectively apply 'Range Anchoring' and non-monetary perks to bend reality without appearing greedy?",
    "options": [
      "Quote an external market salary range where your secret target number is at the bottom of the range (e.g., $140,000–$170,000 when you want $140,000), and bundle non-cash terms like executive coaching or flexible remote days.",
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
    "citation": "Chapter 7: Create the Illusion of Control - Avoid “Why”"
  },
  {
    "id": "nsv-q26",
    "chapterId": "ch7",
    "chapterName": "Ch 7: Create the Illusion of Control (Calibrated Questions)",
    "difficulty": "medium",
    "type": "scenario",
    "question": "Your vendor insists on a 40% immediate price increase effective tomorrow, claiming supply chain inflation. Which calibrated response uses Voss’s signature gentle 'No' to reverse the burden onto the vendor?",
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
    "question": "What does Albert Mehrabian’s 7-38-55 Rule state regarding interpersonal communication in high-stakes or emotional negotiations?",
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
    "question": "How does Chris Voss’s 'Rule of Three' protect a negotiator against counterfeit commitments and implementation failure?",
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
    "question": "You are negotiating an enterprise SaaS contract with a VP who seems eager to sign. How do you apply Voss’s methods to identify hidden 'behind-the-table' deal killers before they torpedo implementation?",
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
    "question": "What is Chris Voss’s rule regarding anger during negotiations?",
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
      "A hidden, unforeseen piece of information—an 'unknown unknown'—that, once discovered, completely transforms the leverage and dynamics of the deal.",
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
    "citation": "Chapter 10: Find the Black Swan - Know Their “Religion”"
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
  }
];

const DEFAULT_BOOKS = [
  {
    id: "seven-principles",
    title: "The Seven Principles for Making Marriage Work",
    author: "John Gottman, Ph.D. & Nan Silver",
    year: 2015,
    description: "The definitive empirical guide to relationship longevity from the Seattle Love Lab. Tests your knowledge on the 7 principles, the Four Horsemen, conflict types, and daily habits.",
    icon: "❤️",
    totalQuestions: DEFAULT_SEVEN_PRINCIPLES_QUESTIONS.length + " Deep Questions",
    chapters: [
      { id: "ch1", name: "Ch 1: Inside the Seattle Love Lab & Marriage Myths" },
      { id: "ch2", name: "Ch 2: Sound Relationship House & Emotional Intelligence" },
      { id: "ch3", name: "Ch 3: The 6 Signs Predicting Divorce & The Four Horsemen" },
      { id: "ch4", name: "Ch 4: Principle 1 - Enhance Your Love Maps" },
      { id: "ch5", name: "Ch 5: Principle 2 - Nurture Fondness and Admiration" },
      { id: "ch6", name: "Ch 6: Principle 3 - Turn Toward Each Other Instead of Away" },
      { id: "ch7", name: "Ch 7: Principle 4 - Let Your Partner Influence You" },
      { id: "ch8", name: "Ch 8: The Two Kinds of Marital Conflict (Solvable vs Perpetual)" },
      { id: "ch9", name: "Ch 9: Principle 5 - Solve Your Solvable Problems" },
      { id: "ch10", name: "Ch 10: Coping with Typical Solvable Problems" },
      { id: "ch11", name: "Ch 11: Principle 6 - Overcome Gridlock" },
      { id: "ch12", name: "Ch 12: Principle 7 - Create Shared Meaning" },
      { id: "afterword", name: "Afterword: The Magic Six Hours & Daily Habits" }
    ]
  },
  {
    id: "never-split",
    title: "Never Split the Difference",
    author: "Chris Voss & Tahl Raz",
    year: 2016,
    description: "Field-tested negotiation principles from the FBI's former lead international kidnapping negotiator. Master tactical empathy, labeling, calibrated questions, Ackerman bargaining, and finding Black Swans.",
    icon: "🤝",
    totalQuestions: DEFAULT_NEVER_SPLIT_QUESTIONS.length + " High-Stakes Questions",
    dataFile: "data/never-split.json",
    chapters: [
      { id: "ch1", name: "Ch 1: The New Rules & System 1 Psychology" },
      { id: "ch2", name: "Ch 2: Be a Mirror (Voices & Isopraxism)" },
      { id: "ch3", name: "Ch 3: Don't Feel Their Pain, Label It (Tactical Empathy)" },
      { id: "ch4", name: "Ch 4: Beware 'Yes' — Master 'No'" },
      { id: "ch5", name: "Ch 5: Trigger 'That's Right' (Summaries)" },
      { id: "ch6", name: "Ch 6: Bend Their Reality (Anchors, Loss Aversion, 'Fair')" },
      { id: "ch7", name: "Ch 7: Create the Illusion of Control (Calibrated Questions)" },
      { id: "ch8", name: "Ch 8: Guarantee Execution (7-38-55, Rule of 3, Liars)" },
      { id: "ch9", name: "Ch 9: Bargain Hard (Ackerman Model & Types)" },
      { id: "ch10", name: "Ch 10: Find the Black Swan (Unknowns & Leverage)" },
      { id: "appendix", name: "Appendix: Prepare a Negotiation One Sheet" }
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
  if (window.EMBEDDED_QUESTIONS && window.EMBEDDED_QUESTIONS[book.id]) {
    return window.EMBEDDED_QUESTIONS[book.id];
  }

  if (book.id === "seven-principles") {
    return DEFAULT_SEVEN_PRINCIPLES_QUESTIONS;
  }
  if (book.id === "never-split") {
    return DEFAULT_NEVER_SPLIT_QUESTIONS;
  }

  const customQuestions = localStorage.getItem(`bookquiz_questions_${book.id}`);
  if (customQuestions) {
    return JSON.parse(customQuestions);
  }

  try {
    const targetFile = book.dataFile || `data/${book.id}.json`;
    const res = await fetch(targetFile);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

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
function openSummariesForBook(book) {
  state.selectedBook = book;
  dom.summariesBookTitle.textContent = book.title;

  let summaries = [];
  if (window.EMBEDDED_SUMMARIES && window.EMBEDDED_SUMMARIES[book.id]) {
    summaries = window.EMBEDDED_SUMMARIES[book.id];
  } else if (book.id === "seven-principles") {
    summaries = DEFAULT_SEVEN_PRINCIPLES_SUMMARIES;
  } else if (book.id === "never-split") {
    summaries = DEFAULT_NEVER_SPLIT_SUMMARIES;
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
