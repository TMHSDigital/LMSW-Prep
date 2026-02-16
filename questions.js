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
  // Converted from LMSW Practice Question Bank Generation.txt (72 items, ids 27-50, 52-75, 77-100)
  // Placeholder choices; use Gemini fill-choices prompt to add real option text.
  {
    id: 27,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A 35-year-old client discloses during a session that he was physically abused by his stepfather when he was 10 years old. The client states the stepfather is now deceased. The client forbids the social worker from reporting this. How should the social worker proceed?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Mandatory reporting laws apply to current suspicion of abuse or neglect of a child. Since the victim is an adult and the perpetrator is deceased (meaning no current children are at risk), the duty to report does not override the client's right to confidentiality. Reporting against the client's wishes (A) would violate self-determination.",
    hint: "Is there a child currently in danger?",
  },
  {
    id: 28,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker in a small rural community realizes that a new referral, a local teacher, is the soccer coach of the social worker's child. Avoiding the professional relationship is not feasible as the social worker is the only provider in the county. What is the BEST way to manage this dual relationship?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.06(c) acknowledges that dual relationships are sometimes unavoidable, particularly in rural settings. When they cannot be avoided, the ethical obligation is to take steps to protect the client, such as setting clear boundaries and discussing the risks. Ignoring the need for services (A) or altering the child's life (C) creates harm or is impractical.",
    hint: "If a dual relationship is unavoidable, manage it with transparency and documentation.",
  },
  {
    id: 29,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker is working with a family from a culture where decision-making is communal and hierarchical. The 22-year-old daughter is the identified client, but her father insists on being present and speaking for her. The daughter appears comfortable with this arrangement. The social worker's ethical obligation is to:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Standard 1.05 requires social workers to demonstrate understanding of culture and its function in human behavior. Imposing Western individualistic values (B or C) on a family that operates within a collectivist framework is a form of cultural oppression, provided the client consents and no abuse is suspected.",
    hint: "Self-determination is defined by the client's values, not the social worker's.",
  },
  {
    id: 30,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A client who has been seeing a social worker in private practice for six months loses their job and can no longer pay the fee. The client is not in crisis. The social worker has offered a sliding scale, but the client still cannot afford it. What is the ethical course of action?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Social workers are not required to provide free services indefinitely. Standard 1.16/1.17 permits termination for non-payment if the client is not in crisis and appropriate referral arrangements are made. Billing fraudulently (C) is illegal. Pro bono (A) is voluntary, not mandatory.",
    hint: "You can terminate for non-payment if you refer and the client is safe.",
  },
  {
    id: 31,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker receives a friend request on social media from a former client. The therapy ended five years ago on good terms. What is the social worker's MOST appropriate response?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.06 prohibits social workers from engaging in dual relationships that may exploit clients. While the therapy has ended, social media interaction can blur boundaries and risk confidentiality. Ignoring the request (B) protects the boundary without engaging in a new interaction. Messaging (C) opens a dialogue on a non-secure platform.",
    hint: "Digital boundaries protect the client's privacy even after termination.",
  },
  {
    id: 32,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A competent elderly client decides to return to his home despite the social worker's assessment that the home is cluttered and potentially unsafe. The client understands the risks but values his independence. The social worker should:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Self-determination (Standard 1.02) allows clients to make decisions that the social worker may disagree with, provided the client has capacity and is not an imminent danger to others. The client is competent and aware of risks. Reporting (A) is inappropriate for a competent adult making a lifestyle choice.",
    hint: "The right to make 'bad' decisions is part of self-determination.",
  },
  {
    id: 33,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker wants to use a new, evidence-based trauma intervention with a client. The intervention involves exposure techniques that may temporarily increase distress. What must the social worker do FIRST?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Standard 1.03 (Informed Consent) requires social workers to use clear and understandable language to inform clients of the purpose of the services, risks related to the services, and limits to services. The client must know the risks (increased distress) before agreeing.",
    hint: "Transparency about risks is legally and ethically required before treatment.",
  },
  {
    id: 34,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker with experience only in adult mental health is asked to provide play therapy for a 6-year-old child. The agency is short-staffed. What is the ethical response?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.04 (Competence) states social workers should provide services only within the boundaries of their education, training, and experience. Accepting a case without competence harms the client. The worker must either decline/refer or obtain the necessary training/supervision *before* practicing.",
    hint: "Competence is a prerequisite for practice, not a byproduct of it.",
  },
  {
    id: 35,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker notices that a colleague appears intoxicated during a staff meeting. This is the first time this has occurred. What is the social worker's ethical obligation?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 2.09 (Impairment of Colleagues) outlines a process: first, consult with the colleague directly if feasible and safe. If the colleague refuses help or the impairment interferes with practice, *then* report to the employer or board. Immediate reporting (A) bypasses the collegial step.",
    hint: "Talk TO the colleague before talking ABOUT them (unless safety is immediate).",
  },
  {
    id: 36,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A client requests access to their case notes. The social worker believes that reading specific details about the diagnosis might be detrimental to the client's progress. What should the social worker do?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.08 (Access to Records) generally requires social workers to provide access. Limiting access is only permitted in exceptional circumstances where there is compelling evidence of serious harm. The preferred ethical route is to facilitate understanding by reviewing the records together.",
    hint: "Withholding records is a rare exception, not a clinical strategy.",
  },
  {
    id: 37,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A client presents the social worker with a handmade scarf as a holiday gift. The scarf has sentimental value but low monetary value. The agency has no specific policy on gifts. What should the social worker do?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.06 (Conflicts of Interest) advises taking into account the cultural context and the monetary value of the gift. Rejecting a small, handmade token can damage the therapeutic alliance. Accepting it is permissible if it doesn't exploit the client or distort boundaries.",
    hint: "Context matters: A scarf is different from a diamond watch.",
  },
  {
    id: 38,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker realizes they forgot to document a crisis session that occurred three days ago. How should the note be entered?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Legal and ethical standards prohibit falsifying records, which includes backdating (A). The correct procedure is to write the note when remembered, clearly marking it as a late entry for the specific date of service.",
    hint: "Never lie about the date in a legal document.",
  },
  {
    id: 39,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker in private practice is unexpectedly hospitalized. She has no professional will or coverage plan. This situation represents a failure in:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Standard 1.15 requires social workers to make reasonable efforts to ensure continuity of services in the event of illness, relocation, or death. Failing to have a plan for unexpected absence leaves clients vulnerable.",
    hint: "Plan for your absence before you are absent.",
  },
  {
    id: 40,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker finds themselves physically attracted to a client. The attraction is mutual, but no action has been taken. What is the REQUIRED ethical step?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Attraction is a human response; acting on it is an ethical violation. The social worker must seek supervision (B) to ensure the attraction does not impact the work. Terminating *to* date (A) is prohibited (exploitation). Transfer (C) is a last resort if supervision fails.",
    hint: "Feelings aren't unethical; actions are.",
  },
  {
    id: 41,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A client who is a professional accountant offers to do the social worker's taxes in exchange for therapy sessions. The client is currently short on cash. What should the social worker consider?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.13 states bartering is generally discouraged but permissible *only* if four conditions are met: it is not clinically contraindicated, the client is not exploited, the relationship is not distorted, and it is an accepted practice in the local community.",
    hint: "Bartering is allowed but has a very high bar to clear.",
  },
  {
    id: 42,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker wants to use data from her current caseload for a publication. She de-identifies the data. Does she need informed consent?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Standard 5.02 (Evaluation and Research) mandates obtaining voluntary and written informed consent from participants. Clients consent to treatment, not research; a separate consent is required for the latter.",
    hint: "Treatment consent ≠ Research consent.",
  },
  {
    id: 43,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker's agency implements a policy that denies services to undocumented immigrants. The social worker believes this violates the Code of Ethics. What should the social worker do?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 3.09 requires social workers to work to improve agency policies. Standard 4.02 forbids practicing discrimination. The worker is obligated to advocate for change. Resignation (C) is a final option, but advocacy is the first step.",
    hint: "Ethics trump bad agency policy.",
  },
  {
    id: 44,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker posts a racist rant on a public social media profile. The post does not mention any clients. Is this an ethical violation?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 4.03 (Private Conduct) states that private conduct is a professional concern if it interferes with the ability to fulfill professional responsibilities. Public racism undermines the social worker's ability to provide non-discriminatory services and damages the profession's integrity.",
    hint: "Private actions have professional consequences if they erode public trust.",
  },
  {
    id: 45,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "The executor of a deceased client's estate requests the client's therapy records. The social worker has no release on file from the client. What is the correct action?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Confidentiality persists after death (Standard 1.07). Unless the executor has specific legal authority under state law to access mental health records (which varies), the social worker should protect the privacy of the deceased until legally compelled.",
    hint: "Secrets don't die with the client.",
  },
  {
    id: 46,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker in private practice hears about a natural disaster in a nearby town. She wants to go to the shelter and hand out her business cards to victims. This is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 4.07 (Solicitations) prohibits soliciting testimonials or business from vulnerable persons who are susceptible to undue influence. This is known as 'ambulance chasing.' She can offer services through relief agencies, but not solicit individuals directly.",
    hint: "Don't exploit vulnerability for business.",
  },
  {
    id: 47,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker refers a client to a psychiatrist. The psychiatrist sends the social worker a $50 'thank you' check for the referral. What should the social worker do?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 1.16 prohibits giving or receiving payment for a referral when no professional service is provided. Kickbacks create a conflict of interest where referrals are based on profit rather than client need.",
    hint: "Referrals are based on need, not profit.",
  },
  {
    id: 48,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A couple requests that the social worker bill their sessions as 'individual therapy' for the wife so their insurance will cover it. The social worker primarily treats the relationship dynamics. What is the ethical response?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Standard 3.05 (Billing) requires accurate representation of services provided. Misrepresenting the modality to secure payment is fraud and unethical.",
    hint: "Don't lie to the insurance company.",
  },
  {
    id: 49,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A client calls a social worker for an appointment but mentions she is currently seeing another therapist for the same issue. She is unhappy with the current therapist but hasn't told them yet. What should the social worker do?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "While clients have the right to change providers, Standard 2.03 suggests social workers should carefully consider the needs of the client. Seeing two therapists for the same issue can cause conflicting treatment. The ethical step is to discuss the implications and coordinate care if possible.",
    hint: "Coordinate, don't duplicate.",
  },
  {
    id: 50,
    category: "Values and Ethics",
    domain: "Values and Ethics",
    question:
      "A social worker is going through a contentious divorce and finds herself crying between sessions. She is finding it hard to concentrate on her clients. According to the 2021 Code revisions, she should:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "The new purpose section and Ethical Principles emphasize professional self-care. If personal problems interfere with professional effectiveness (Impairment), the social worker must take remedial action (supervision, therapy, reduced load) to prevent harm to clients.",
    hint: "You cannot pour from an empty cup.",
  },
  {
    id: 52,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A 20-year-old college student is brought to the health center. He believes the FBI is monitoring his thoughts through the wifi. These symptoms started 3 weeks ago. Before this, he was functioning well. He denies drug use. What is the provisional diagnosis?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 2,
    rationale:
      "The key is duration. The symptoms have lasted 3 weeks (< 1 month). Brief Psychotic Disorder lasts 1 day to 1 month with full return to function. Schizophreniform (B) is 1 to 6 months. Schizophrenia (A) is > 6 months.",
    hint: "Watch the clock: Under 1 month is Brief.",
  },
  {
    id: 53,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A social worker suspects a client may have a drinking problem. The client denies it but mentions getting into arguments with his wife about his drinking and feeling bad about it later. Which screening tool is MOST appropriate?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The CAGE questionnaire is a quick screen for alcohol use disorder. The client's comments reflect the 'A' (Annoyed by criticism) and 'G' (Guilty) components. BDI (B) is for depression. MMPI (C) is a complex personality inventory.",
    hint: "CAGE: Cut down, Annoyed, Guilty, Eye-opener.",
  },
  {
    id: 54,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client states, 'I don't know if I can go on like this.' What is the social worker's FIRST step?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "When suicide is implied, the social worker must clarify the risk immediately and directly to assess lethality. Ambiguous questions allow the client to evade. You cannot contract for safety (B) or explore depth (C) until you assess the active risk.",
    hint: "If you smell smoke, ask if there is a fire.",
  },
  {
    id: 55,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A 75-year-old client reports feeling like his life has been wasted and he has accomplished nothing of value. According to Erikson, which psychosocial crisis is he experiencing?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "The final stage of Erikson's model (65+) is Integrity vs. Despair. Success leads to wisdom; failure leads to regret and despair. Generativity (A) is middle adulthood. Intimacy (C) is young adulthood.",
    hint: "Old age looks back: with a smile (Integrity) or a frown (Despair).",
  },
  {
    id: 56,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client who is angry at his boss comes home and yells at his children for being too loud. What defense mechanism is this?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Displacement is shifting impulses (anger) from a threatening object (boss) to a safer target (children). Projection (A) would be accusing the boss of being angry. Reaction Formation (C) would be being overly nice to the boss.",
    hint: "Kicking the dog because work was hard = Displacement.",
  },
  {
    id: 57,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "Parents report their 6-year-old child disrupts class, cannot wait his turn, and loses things constantly. He talks excessively and runs around when he should be seated. These behaviors happen at school and home. What is the likely diagnosis?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "The symptoms describe inattention, hyperactivity, and impulsivity occurring in two settings (home and school), which fits ADHD. Autism (A) involves social communication deficits. ODD (C) involves vindictiveness and defiance, not just hyperactivity.",
    hint: "ADHD is about regulation of attention and motor skills, not just defiance.",
  },
  {
    id: 58,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A 65-year-old client presents with sudden onset of confusion, memory loss, and visual hallucinations. The family says he was fine yesterday. What should the social worker assess FIRST?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Sudden (acute) onset of confusion and hallucinations suggests Delirium, often caused by infection (UTI) or medication. Dementia (B) is a slow, progressive decline. Medical safety comes first.",
    hint: "Sudden change in mental status = Medical Emergency.",
  },
  {
    id: 59,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client has a pattern of unstable relationships, frantic efforts to avoid abandonment, and chronic feelings of emptiness. She often idealizes the social worker one week and devalues them the next. This fits which disorder?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Borderline Personality Disorder (BPD) is characterized by instability in mood, self-image, and relationships, splitting (idealization/devaluation), and fear of abandonment. Histrionic (A) is about attention-seeking. Narcissistic (C) lacks the self-harm/abandonment focus.",
    hint: "I hate you, don't leave me = BPD.",
  },
  {
    id: 60,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A child in foster care rarely seeks comfort when distressed and does not respond when comforted. He is emotionally withdrawn. This behavior is consistent with:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "RAD is characterized by inhibited, emotionally withdrawn behavior toward caregivers (not seeking comfort) due to pathogenic care. Disinhibited Social Engagement (B) is the opposite—overly familiar with strangers.",
    hint: "RAD = Withdraws from caregivers.",
  },
  {
    id: 61,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A social worker is selecting an assessment tool. She wants to ensure that the tool measures what it claims to measure. She is looking for:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Validity is accuracy (measuring what it is supposed to, e.g., a depression scale actually measuring depression). Reliability (A) is consistency (getting the same score repeatedly).",
    hint: "Valid = Truth. Reliable = Consistent.",
  },
  {
    id: 62,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A social worker notes that a husband always answers questions directed at his wife. The wife stays silent and looks at the husband before speaking. In structural family therapy, this is an example of:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Enmeshment refers to blurred boundaries where autonomy is lost, such as one member speaking for another or feeling the other's feelings. Triangulation (B) involves pulling a third person in.",
    hint: "If they act like one person instead of two, it's enmeshment.",
  },
  {
    id: 63,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client with a long history of alcohol abuse presents with confusion, ataxia (loss of coordination), and eye movement problems. The social worker should suspect:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Wernicke's is an acute, reversible condition caused by Thiamine (B1) deficiency characterized by the triad of confusion, ataxia, and ophthalmoplegia. If untreated, it progresses to Korsakoff's (B), which is chronic memory loss.",
    hint: "Wernicke's = Wobbly and Wild eyes (Acute).",
  },
  {
    id: 64,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A therapy group has been meeting for three weeks. Members are starting to criticize the leader and argue about the rules. According to Tuckman, what stage is this?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Storming is the stage of conflict, resistance to influence, and jockeying for position. Forming (A) is polite and tentative. Norming (C) is when cohesion develops.",
    hint: "Conflict is necessary; it's the storm before the calm.",
  },
  {
    id: 65,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A 16-year-old female restricts her food intake significantly, has a fear of gaining weight, and has a distorted body image. Her BMI is 16. She stopped menstruating. The diagnosis is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Anorexia Nervosa is defined by restriction of energy intake leading to low body weight, fear of weight gain, and disturbance in self-perception. Bulimia (A) involves bingeing and purging but usually maintains normal weight.",
    hint: "Low weight + Fear of Fat = Anorexia.",
  },
  {
    id: 66,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client is prescribed a MAOI antidepressant. The social worker must educate the client to avoid foods high in Tyramine, such as:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "MAOIs interact with Tyramine to cause a hypertensive crisis (stroke risk). Tyramine is found in aged, fermented, or cured foods (cheese, salami, wine).",
    hint: "MAOI diet = No wine and cheese party.",
  },
  {
    id: 67,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "To understand the intergenerational patterns of disease and relationship dynamics in a family, the BEST tool to create is a:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "A Genogram maps family history, medical issues, and relationships across generations. An Ecomap (B) maps the client's relationship with external systems (school, work, church).",
    hint: "Genogram = Genes/Generations.",
  },
  {
    id: 68,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client spends 3 hours a day checking locks because she fears her family will be murdered if she doesn't. She knows this is irrational but cannot stop. This is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "OCD involves intrusive thoughts (obsessions) and ritualistic behaviors (compulsions). The client recognizes it is irrational (ego-dystonic). OCPD (B) is a personality style of perfectionism and control that the client thinks is 'right' (ego-syntonic).",
    hint: "OCD hurts the client (they want to stop).",
  },
  {
    id: 69,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A child believes that the moon follows him when he walks. According to Piaget, this child is in which stage?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "The Preoperational stage (ages 2-7) is characterized by egocentrism (seeing the world only from their perspective) and magical thinking. The child believes the world revolves around them.",
    hint: "Pre-schoolers are Pre-operational and Pretty egocentric.",
  },
  {
    id: 70,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client presents with paralysis of the arm. Medical tests show no physiological cause. The symptom started after a severe argument with her spouse. This is likely:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Conversion Disorder involves altered voluntary motor or sensory function (paralysis, blindness) incompatible with medical conditions, often triggered by psychological stress. It is not 'faking' (Factitious - C).",
    hint: "Psychological stress 'converts' into physical disability.",
  },
  {
    id: 71,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "In the first session, the client talks for 20 minutes about various problems. The social worker asks, 'If we could only work on one thing today that would make the biggest difference, what would it be?' This technique is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Partializing is breaking down a complex, overwhelming situation into smaller, manageable parts to prioritize focus. Universalizing (B) is normalizing a feeling.",
    hint: "Eat the elephant one bite at a time = Partializing.",
  },
  {
    id: 72,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "Three months after moving to a new city, a client reports feeling sad and anxious, affecting her work. She does not meet criteria for Major Depression. The most appropriate diagnosis is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Adjustment Disorders occur within 3 months of a stressor (moving) and involve distress out of proportion or functional impairment. It is the 'common cold' of diagnoses when criteria for stricter disorders aren't met.",
    hint: "Reaction to a change/stressor = Adjustment.",
  },
  {
    id: 73,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A client is found wandering in a different city with no memory of his past or identity. This is characteristic of:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Dissociative Fugue involves bewildered wandering or travel associated with amnesia for identity. DID (C) involves distinct personalities/alters. Depersonalization (B) is feeling detached from one's body.",
    hint: "Fugue = Flight (Travel).",
  },
  {
    id: 74,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "To diagnose Schizoaffective Disorder, the client must have:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The defining feature of Schizoaffective is that the psychosis (delusions/hallucinations) happens *independent* of the mood for at least 2 weeks. If psychosis only happens *during* depression/mania, it is Mood Disorder with Psychotic Features.",
    hint: "Schizoaffective is the 'Both/And' disorder, but Psychosis stands alone for 2 weeks.",
  },
  {
    id: 75,
    category: "Assessment and Planning",
    domain: "Assessment and Planning",
    question:
      "A social worker wants to evaluate if a new intervention is causing the desired change in a client. She measures the behavior before the intervention (Baseline) and during the intervention. This is a:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Single-Subject Design involves tracking an individual client's progress. 'A' is the baseline, 'B' is the intervention phase. This allows the worker to see if 'B' changed 'A'.",
    hint: "AB Design: A = As it was, B = Better (hopefully).",
  },
  {
    id: 77,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client calls a crisis hotline stating she has taken a handful of pills. What is the social worker's FIRST action?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "In a life-threatening emergency, assessment is focused solely on survival. Knowing the substance determines the medical response, and keeping contact is crucial while dispatching help (911). Psychosocial assessment (A) happens *after* she is medically stable.",
    hint: "Medical safety overrides all therapy.",
  },
  {
    id: 78,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client with an alcohol addiction admits his drinking is costing him money but says he needs it to relax. He is unsure if he wants to stop. According to the Stages of Change, he is in:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Contemplation is the stage of ambivalence (weighing pros and cons). He sees the problem (cost) but values the behavior (relax). Precontemplation (A) is denial. Preparation (C) is planning to take action.",
    hint: "Contemplation = Sitting on the fence.",
  },
  {
    id: 79,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A therapist observes a teenage daughter yelling at the mother while the father laughs. The therapist asks the father to sit next to the mother and support her in setting a rule. This intervention is called:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Unbalancing involves the therapist siding with a subsystem (the parents) to realign the hierarchy. By empowering the parents to act together, the therapist restores structural order. Enactment (B) is having them fight so the therapist can see it.",
    hint: "Structuring the hierarchy = Structural Therapy.",
  },
  {
    id: 80,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A social worker asks a client, 'Suppose tonight, while you slept, a miracle occurred and this problem was solved. When you woke up, what would be the first thing you noticed that was different?' This is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The Miracle Question is the hallmark of SFBT. It helps the client envision a future without the problem, identifying goals. Exception questions (B) ask about times the problem wasn't present.",
    hint: "SFBT focuses on the Future, not the Past.",
  },
  {
    id: 81,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "In a group therapy session for grief, a member starts crying. Another member hands her a tissue and says, 'I felt exactly the same way last month.' Yalom would call this curative factor:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Universality is the relief of knowing one is not alone in their suffering. 'I felt the same way' validates the shared experience. Altruism (B) is the act of giving help.",
    hint: "We are in this together = Universality.",
  },
  {
    id: 82,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A community social worker identifies a high rate of asthma in a low-income neighborhood near a factory. The FIRST step in addressing this is to:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "The Planned Change Process starts with Engagement and Assessment. Before taking action (Protest - A) or implementing solutions (Clinic - C), you must verify and understand the problem through data collection.",
    hint: "Data before Action.",
  },
  {
    id: 83,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A case manager is helping a client with a severe mental illness who is being discharged from the hospital. The client needs housing, medication management, and job training. The case manager's primary role here is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "A Broker links clients to needed resources. The primary task described is connecting the client to services. Advocacy (C) is fighting for rights when services are denied.",
    hint: "Broker = Connector.",
  },
  {
    id: 84,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "Which therapy modality is MOST indicated for a client with a history of non-suicidal self-injury (cutting) and chronic emotional instability?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "DBT was specifically developed for Borderline Personality Disorder and self-harm. It focuses on replacing maladaptive coping (cutting) with skills (mindfulness, distress tolerance).",
    hint: "Self-harm/Borderline -> DBT.",
  },
  {
    id: 85,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A therapist tells a couple who argues constantly to schedule a fight from 7:00 to 7:15 PM every night. If they are not angry, they must sit in silence. This technique is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Paradoxical Directives ('prescribing the symptom') are used in Strategic Family Therapy to disrupt the involuntary nature of the behavior. By making the fighting a chore, the couple often rebels by *not* fighting.",
    hint: "Strategic = Manipulating the symptom to make it stop.",
  },
  {
    id: 86,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A social worker conducts a satisfaction survey at the end of a group cycle to determine if the program met its goals. This is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Summative Evaluation occurs at the end (Sum) to measure outcomes. Formative (A) happens *during* the process to make improvements along the way.",
    hint: "Summative = Summary (The End).",
  },
  {
    id: 87,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "In community organizing, 'Locality Development' focuses on:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Locality Development emphasizes 'process goals'—building the community's ability to help itself. Social Planning (A) relies on experts. Social Action (C) relies on conflict/protest.",
    hint: "Locality Development = 'Let's all work together'.",
  },
  {
    id: 88,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A social worker finds himself feeling unusually sleepy and bored whenever a specific client speaks. This is likely an example of:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Countertransference is the social worker's emotional reaction to the client. Boredom can be a signal of the client's avoidance or a dynamic the client induces.",
    hint: "Counter = The Worker's feelings.",
  },
  {
    id: 89,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client taking Lithium for Bipolar Disorder reports vomiting, shaky hands, and confusion. The social worker should:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "These are signs of Lithium Toxicity, which can be fatal. It is a medical emergency. Lithium has a narrow therapeutic window.",
    hint: "Lithium + Sick = Toxicity (Emergency).",
  },
  {
    id: 90,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client addicted to heroin is interested in treatment but fears withdrawal. The social worker should recommend a referral for:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The gold standard for Opioid Use Disorder is MAT (Medication-Assisted Treatment) to manage withdrawal and cravings. Abstinence-only (B) has high relapse rates for opioids without medical support.",
    hint: "Opioids require medical stabilization (MAT).",
  },
  {
    id: 91,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client has met all treatment goals. When the social worker brings up termination, the client's symptoms suddenly return. This is known as:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Regression is a defense mechanism often seen at termination. The client subconsciously reverts to earlier behavior to avoid the loss of the relationship.",
    hint: "Termination brings back the ghosts (Regression).",
  },
  {
    id: 92,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A social worker is stuck on a case and talks to a colleague who has no administrative authority over her. This interaction is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 1,
    rationale:
      "Consultation is asking for advice from a peer/expert who has no power to mandate change. Supervision (A) involves administrative authority and liability.",
    hint: "Peers Consult; Bosses Supervise.",
  },
  {
    id: 93,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "In a session with a couple, the wife hints that the husband hit her last night. The husband is present. The social worker should:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Safety is paramount. Investigating DV with the abuser present (B) increases the risk of retaliation. The worker must separate them to assess safety securely.",
    hint: "Never assess DV safety with the abuser in the room.",
  },
  {
    id: 94,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A therapist asks, 'How has Anxiety tried to trick you this week?' asking the client to view Anxiety as a separate character. This is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Externalization is the core technique of Narrative Therapy. It separates the person from the problem ('The problem is the problem, the person is not the problem').",
    hint: "Make the problem a noun/monster outside the person.",
  },
  {
    id: 95,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client on Haldol (antipsychotic) begins smacking his lips and moving his tongue rhythmically. This indicates:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Tardive Dyskinesia (TD) involves involuntary movements of the face/mouth/tongue caused by long-term antipsychotic use. It can be permanent.",
    hint: "Tardive = Late. Dyskinesia = Bad movement.",
  },
  {
    id: 96,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client is overwhelmed by eviction, unemployment, and a breakup. The social worker helps the client list the problems and choose two to work on over the next 8 weeks. This approach is:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Task-Centered Practice is short-term, highly structured, and problem-solving oriented. It focuses on specific, measurable tasks.",
    hint: "Lists + Short Term = Task-Centered.",
  },
  {
    id: 97,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A client needs medication but has no insurance. The social worker's role is to:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The 'Broker' role involves connecting clients to resources. Paying (B) violates boundaries.",
    hint: "Connect, don't rescue.",
  },
  {
    id: 98,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A researcher conducts in-depth interviews with 5 trauma survivors to understand their lived experience. This is what type of research?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Qualitative research focuses on words, meanings, and experiences (interviews). Quantitative (B) focuses on numbers.",
    hint: "Qualitative = Quality/Stories. Quantitative = Quantity/Numbers.",
  },
  {
    id: 99,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "A social worker leaves an agency. Two months later, the agency receives a subpoena for her former client's records. Who is responsible for responding?",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "Records generally belong to the agency/practice, not the individual worker. The agency's records custodian handles the legal request.",
    hint: "The file cabinet belongs to the agency.",
  },
  {
    id: 100,
    category: "Intervention and Practice",
    domain: "Intervention and Practice",
    question:
      "Using the DSM-5-TR Cultural Formulation Interview (CFI) helps the social worker:",
    choices: ["Option A", "Option B", "Option C"],
    correctIndex: 0,
    rationale:
      "The CFI is designed to assess the client's cultural perception of the problem ('What do you call your problem?' 'What do you think caused it?').",
    hint: "Ask the client what THEY think is wrong.",
  },
];
