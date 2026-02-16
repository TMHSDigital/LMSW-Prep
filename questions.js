/**
 * LMSW Practice Exam Question Pool
 * ASWB 2026 Master's blueprint: three domains with weights
 *   Values and Ethics 35% | Assessment and Planning 33% | Intervention and Practice 32%
 * Legacy mapping: Human Development + Professional Ethics -> Values and Ethics (or split);
 *   Assessment -> Assessment and Planning; Interventions -> Intervention and Practice.
 */
var DOMAIN_WEIGHTS = {
  "Values and Ethics": 0.35,
  "Assessment and Planning": 0.33,
  "Intervention and Practice": 0.32,
};

const QUESTIONS = [
  // Human Development -> Assessment and Planning (developmental theory)
  {
    id: 1,
    category: "Human Development",
    domain: "Values and Ethics",
    question:
      "According to Erikson's psychosocial theory, the primary developmental task of adolescence is resolution of which conflict?",
    choices: [
      "Industry vs. inferiority",
      "Identity vs. role confusion",
      "Intimacy vs. isolation",
      "Generativity vs. stagnation",
    ],
    correctIndex: 1,
    rationale:
      "Erikson identified identity vs. role confusion as the central crisis of adolescence (roughly ages 12–18), during which the individual forms a coherent sense of self and social role.",
    hint: "Think about the stage when teens are figuring out 'who they are' and trying on different roles.",
  },
  {
    id: 2,
    category: "Human Development",
    domain: "Assessment and Planning",
    question:
      "A 7-year-old consistently blames others for their mistakes and has difficulty understanding how their actions affect peers. This most closely reflects a delay in:",
    choices: [
      "Concrete operational thought",
      "Theory of mind",
      "Attachment security",
      "Moral reasoning",
    ],
    correctIndex: 1,
    rationale:
      "Theory of mind is the ability to attribute mental states to others and recognize that others have beliefs, intentions, and perspectives different from one's own. Difficulty with this can manifest as blaming others and poor perspective-taking.",
    hint: "Consider the capacity to understand that other people have their own thoughts and feelings.",
  },
  {
    id: 3,
    category: "Human Development",
    domain: "Assessment and Planning",
    question:
      "In Piaget's theory, a child who can solve conservation tasks but cannot yet reason about abstract hypothetical situations is likely in which stage?",
    choices: [
      "Preoperational",
      "Concrete operational",
      "Formal operational",
      "Sensorimotor",
    ],
    correctIndex: 1,
    rationale:
      "Concrete operational stage (approximately 7–11 years) is characterized by conservation, logical thought about concrete objects and events, but not yet abstract or hypothetical reasoning, which emerges in formal operations.",
    hint: "Conservation is achieved in the stage that comes after preoperational and before formal operations.",
  },
  {
    id: 4,
    category: "Human Development",
    domain: "Intervention and Practice",
    question:
      "Which attachment pattern in infancy is most associated with later difficulty in emotional regulation and relationship stability?",
    choices: [
      "Secure attachment",
      "Avoidant attachment",
      "Disorganized attachment",
      "Resistant (ambivalent) attachment",
    ],
    correctIndex: 2,
    rationale:
      "Disorganized attachment, linked to frightening or unresolved caregiver behavior, is most strongly associated with later emotional dysregulation, trauma-related symptoms, and relationship difficulties.",
    hint: "One pattern is characterized by lack of a coherent strategy and is often linked to caregiver fear or trauma.",
  },
  {
    id: 5,
    category: "Human Development",
    domain: "Values and Ethics",
    question:
      "Kohlberg's conventional level of moral development is best characterized by:",
    choices: [
      "Avoiding punishment and seeking rewards",
      "Upholding social rules and expectations and maintaining relationships",
      "Following universal ethical principles over laws",
      "Concrete, tangible consequences only",
    ],
    correctIndex: 1,
    rationale:
      "At the conventional level, moral reasoning is based on conforming to social norms, maintaining relationships, and fulfilling roles and expectations (good boy/good girl and law-and-order orientations).",
    hint: "Conventional means oriented toward norms and expectations of the group.",
  },
  {
    id: 6,
    category: "Human Development",
    domain: "Assessment and Planning",
    question:
      "A social worker is considering how culture shapes the expression of autonomy in teens. This reflects attention to:",
    choices: [
      "Universal stages only",
      "Socioeconomic determinants only",
      "Cultural context in development",
      "Biological maturation only",
    ],
    correctIndex: 2,
    rationale:
      "Development is influenced by cultural context; norms for autonomy, independence, and family roles vary across cultures. Considering culture avoids ethnocentric application of stage theories.",
    hint: "Development is not the same in every culture; context matters.",
  },
  // Assessment -> Assessment and Planning
  {
    id: 7,
    category: "Assessment",
    domain: "Assessment and Planning",
    question:
      "When conducting a risk assessment for self-harm, the social worker should prioritize:",
    choices: [
      "Only past attempts",
      "Current ideation, intent, plan, means, and protective factors",
      "Family history only",
      "Diagnosis only",
    ],
    correctIndex: 1,
    rationale:
      "A thorough risk assessment includes current suicidal ideation, intent, specific plan, access to means, and protective factors, in addition to history. No single factor is sufficient.",
    hint: "Think about what you need to know in the here-and-now to gauge imminent risk.",
  },
  {
    id: 8,
    category: "Assessment",
    domain: "Assessment and Planning",
    question:
      "A biopsychosocial assessment typically includes all of the following EXCEPT:",
    choices: [
      "Medical history and current health",
      "Psychological and emotional functioning",
      "Social supports and environment",
      "A guaranteed treatment recommendation",
    ],
    correctIndex: 3,
    rationale:
      "A biopsychosocial assessment gathers biological, psychological, and social information to inform understanding and planning. It does not guarantee a specific treatment recommendation; that follows from the assessment.",
    hint: "Assessment describes and informs; it does not guarantee an outcome.",
  },
  {
    id: 9,
    category: "Assessment",
    domain: "Assessment and Planning",
    question:
      "Cultural formulation in assessment is used primarily to:",
    choices: [
      "Replace DSM criteria",
      "Understand how culture shapes identity, distress, and help-seeking",
      "Assign a cultural diagnosis",
      "Limit the assessment scope",
    ],
    correctIndex: 1,
    rationale:
      "Cultural formulation helps the clinician understand the cultural context of the client's identity, explanatory models of illness, psychosocial stressors, and cultural features of the therapeutic relationship and help-seeking.",
    hint: "It's about understanding the role of culture in the person's experience, not replacing other criteria.",
  },
  {
    id: 10,
    category: "Assessment",
    domain: "Assessment and Planning",
    question:
      "Which is the best practice when using standardized instruments with diverse clients?",
    choices: [
      "Use only instruments normed on the same cultural group",
      "Use instruments with established reliability and validity and consider language, norms, and appropriateness",
      "Avoid standardized instruments with non-majority clients",
      "Rely solely on clinical judgment",
    ],
    correctIndex: 1,
    rationale:
      "Best practice is to use instruments with demonstrated reliability and validity while considering language, cultural appropriateness, and normative data, and to interpret results in context rather than in isolation.",
    hint: "Balance standardization with attention to language, norms, and fit for the client.",
  },
  {
    id: 11,
    category: "Assessment",
    domain: "Intervention and Practice",
    question:
      "Documenting a client's strengths in an assessment is important because it:",
    choices: [
      "Is required only for certain funding sources",
      "Provides a foundation for intervention and balances deficit-focused views",
      "Replaces the need for problem identification",
      "Shortens the assessment process",
    ],
    correctIndex: 1,
    rationale:
      "Identifying strengths supports empowerment, informs treatment planning by building on existing resources, and provides a more complete picture than a deficit-only focus.",
    hint: "Strengths are useful for planning and for how we view the client.",
  },
  {
    id: 12,
    category: "Assessment",
    domain: "Assessment and Planning",
    question:
      "When a client presents with vague somatic complaints and the social worker suspects underlying depression, the most appropriate next step is:",
    choices: [
      "Refer only to a physician and close the case",
      "Conduct a thorough psychosocial and mental health assessment while considering medical referral",
      "Diagnose depression without further assessment",
      "Ignore somatic complaints and focus only on mood",
    ],
    correctIndex: 1,
    rationale:
      "Somatic symptoms can mask depression, especially in some cultural contexts. A full psychosocial and mental health assessment is needed, with medical referral when indicated to rule out organic causes.",
    hint: "Both mental health and possible medical causes need to be considered.",
  },
  // Interventions -> Intervention and Practice
  {
    id: 13,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "Motivational interviewing is best characterized as:",
    choices: [
      "A technique to convince the client to accept the worker's recommendation",
      "A collaborative, client-centered approach to strengthen motivation for change",
      "A confrontational approach to denial",
      "A substitute for other evidence-based treatments",
    ],
    correctIndex: 1,
    rationale:
      "Motivational interviewing is a collaborative, person-centered method that explores and resolves ambivalence and evokes the client's own motivation and commitment to change, without arguing or imposing goals.",
    hint: "The approach emphasizes collaboration and evoking the client's own reasons for change.",
  },
  {
    id: 14,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "A social worker uses role-play in session to practice saying 'no' to a demanding family member. This is most consistent with:",
    choices: [
      "Psychodynamic technique",
      "Behavioral rehearsal / skills training",
      "Unconditional positive regard only",
      "Medication management",
    ],
    correctIndex: 1,
    rationale:
      "Role-play to practice a specific behavior (e.g., assertiveness) is a form of behavioral rehearsal or skills training, common in cognitive-behavioral and social skills interventions.",
    hint: "Practicing a specific behavior in a safe context is a hallmark of which approach?",
  },
  {
    id: 15,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "Crisis intervention typically focuses on:",
    choices: [
      "Long-term personality change",
      "Immediate safety, stabilization, and restoration of equilibrium",
      "Medication adjustment only",
      "Family of origin only",
    ],
    correctIndex: 1,
    rationale:
      "Crisis intervention aims to ensure safety, reduce acute distress, restore pre-crisis functioning where possible, and mobilize support—not to achieve deep personality change, which is a longer-term goal.",
    hint: "Crisis work is short-term and focused on the immediate situation.",
  },
  {
    id: 16,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "When using a trauma-informed approach, the social worker should:",
    choices: [
      "Focus only on the traumatic event details",
      "Prioritize safety, choice, collaboration, and avoid re-traumatization",
      "Avoid discussing trauma until the client is 'cured'",
      "Use exposure only without preparation",
    ],
    correctIndex: 1,
    rationale:
      "Trauma-informed care emphasizes physical and emotional safety, choice and control for the client, collaboration, trustworthiness, and awareness of ways services might re-traumatize, rather than pushing for trauma disclosure.",
    hint: "Think about safety, empowerment, and avoiding practices that could worsen trauma responses.",
  },
  {
    id: 17,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "A contract in social work practice is used to:",
    choices: [
      "Legally bind the client to treatment",
      "Clarify goals, roles, and expectations between worker and client",
      "Replace informed consent",
      "Limit the client's right to terminate",
    ],
    correctIndex: 1,
    rationale:
      "A contract (verbal or written) clarifies mutual goals, roles, expectations, and boundaries. It supports collaboration and accountability but does not create a legal obligation to continue treatment against the client's will.",
    hint: "Contracts are about clarity and agreement, not legal enforcement of attendance.",
  },
  {
    id: 18,
    category: "Interventions",
    domain: "Intervention and Practice",
    question:
      "Systemic family therapy is distinguished by its emphasis on:",
    choices: [
      "Only the identified patient's symptoms",
      "Patterns of interaction and relationships within the family system",
      "Medication as the primary intervention",
      "Individual sessions only",
    ],
    correctIndex: 1,
    rationale:
      "Systemic family therapy views problems in the context of family structure, boundaries, and interaction patterns rather than locating pathology only in one member.",
    hint: "The word 'systemic' points to what level of focus?",
  },
  // Professional Ethics -> Values and Ethics
  {
    id: 19,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "According to the NASW Code of Ethics, a social worker's primary responsibility is to:",
    choices: [
      "The employing organization",
      "The client",
      "The referral source",
      "Third-party payers",
    ],
    correctIndex: 1,
    rationale:
      "The NASW Code of Ethics states that the social worker's primary responsibility is to the client, while also acknowledging responsibilities to the broader society, the profession, and other contexts.",
    hint: "The Code specifies one primary fiduciary relationship.",
    distractorRationales: [
      "The employing organization is important but secondary to the client's welfare.",
      null,
      "The referral source has a role in the process but is not the primary responsibility.",
      "Third-party payers fund services but the social worker's primary duty is to the client.",
    ],
  },
  {
    id: 20,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "Informed consent for treatment should include:",
    choices: [
      "Only the diagnosis",
      "Nature of services, risks, benefits, alternatives, and right to refuse or withdraw",
      "Only the cost of services",
      "Guarantees of outcome",
    ],
    correctIndex: 1,
    rationale:
      "Informed consent typically includes the nature and purpose of services, risks and benefits, alternatives, limits of confidentiality, and the right to refuse or withdraw consent.",
    hint: "Consent is 'informed' when the client knows what they're agreeing to and what their options are.",
  },
  {
    id: 21,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "A client asks the social worker to not document their substance use in the record. The social worker should:",
    choices: [
      "Always agree to avoid conflict",
      "Explain the purpose of documentation and limits of confidentiality; document in accordance with professional and legal standards",
      "Never document substance use",
      "Share the record with the client's family without consent",
    ],
    correctIndex: 1,
    rationale:
      "Social workers must maintain accurate documentation for continuity of care and accountability. They should explain why documentation is needed and the limits of confidentiality, and document in line with professional standards rather than omitting clinically relevant information at the client's request without a legal basis.",
    hint: "Documentation has professional and sometimes legal purposes; the worker must balance client wishes with standards.",
  },
  {
    id: 22,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "Dual or multiple relationships are of concern because they:",
    choices: [
      "Are always prohibited",
      "Can impair professional judgment and increase risk of exploitation",
      "Are required in rural practice",
      "Have no ethical relevance",
    ],
    correctIndex: 1,
    rationale:
      "Dual or multiple relationships (e.g., social and professional) can compromise objectivity, blur boundaries, and increase the risk of exploitation or harm. The Code advises avoiding them when possible and managing them when unavoidable.",
    hint: "Think about how non-professional roles can affect the professional relationship.",
  },
  {
    id: 23,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "When terminating services, the social worker should:",
    choices: [
      "Stop immediately without explanation",
      "Provide appropriate notice, facilitate transfer or referral as needed, and avoid abandoning the client",
      "Continue services indefinitely if the client requests",
      "Withhold records from the client",
    ],
    correctIndex: 1,
    rationale:
      "Ethical termination includes timely notice, discussion of reasons, assistance with referrals or transition when needed, and avoiding abandonment. Records may be transferred with consent or as required by law.",
    hint: "Termination should be planned and should not leave the client without support when services are still needed.",
  },
  {
    id: 24,
    category: "Professional Ethics",
    domain: "Values and Ethics",
    question:
      "Confidentiality may be breached without client consent when:",
    choices: [
      "The social worker feels like it would help",
      "There is a serious, imminent risk to self or others, or as required by law",
      "A family member asks",
      "The agency policy alone permits it",
    ],
    correctIndex: 1,
    rationale:
      "Exceptions to confidentiality include imminent risk of harm to self or others, certain mandatory reporting situations (e.g., child/elder abuse as defined by law), and when required by law or court order—not merely agency policy or convenience.",
    hint: "Think about situations involving serious danger or legal mandate.",
  },
  // Sample 3-option item (ASWB 2026 format)
  {
    id: 25,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker learns a client is planning to leave an abusive partner. The client asks the worker not to document the plan in the record. What should the social worker do FIRST?",
    choices: [
      "Explain the purpose of documentation and limits of confidentiality, then document in accordance with professional standards",
      "Agree not to document to maintain the therapeutic alliance",
      "Refuse to continue services until the client consents to documentation",
    ],
    correctIndex: 0,
    rationale:
      "The social worker should explain why documentation is important for continuity and safety, and the limits of confidentiality, then document according to professional and legal standards rather than omitting clinically relevant information at the client's request without a legal basis.",
    hint: "Consider balancing the client's request with professional standards and safety.",
    distractorRationales: [
      null,
      "Agreeing not to document undermines continuity and safety and does not align with professional standards.",
      "Refusing to continue services is disproportionate; the worker should explain and document appropriately rather than terminate.",
    ],
  },
];
