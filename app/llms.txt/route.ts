const siteUrl = 'https://arfat-phi.vercel.app';

const content = `# Arfat Abdullah Alkamly (عرفات عبدالله الكاملي)

> Cybersecurity researcher and software engineer focused on defensive security, vulnerability analysis, digital forensics, and practical software engineering.

## Profile
- Arabic name: عرفات عبدالله الكاملي
- English name: Arfat Abdullah Alkamly
- Field: Cybersecurity and Networks
- Professional focus: Cybersecurity Researcher & Software Engineer
- Website: ${siteUrl}
- Professional email: alkamlyrfat@gmail.com
- Academic researcher identifier: https://orcid.org/0009-0008-1348-5146

## Featured projects
- [AEGIS-TITAN] (${siteUrl}/en/projects/aegis-titan): A defensive cyber-security system concept covering security operations, monitoring, analysis, incident response, and digital forensics. Internal engineering details are intentionally not public.
- [Academic OS] (${siteUrl}/en/projects/academic-os): A Flutter-based academic productivity application for courses, tasks, schedules, exams, and grades.
- [CryptoLab-Pro] (${siteUrl}/en/projects/cryptolab-pro): An educational cryptography and analysis workspace with classical ciphers, AES-GCM, hashing, and message authentication.
- [All projects] (${siteUrl}/en/projects)

## Research
The research portfolio contains 13 proposals covering defensive security engineering, AI-driven threat detection, vulnerability analysis, digital forensics, network security, identity and access security, cloud security, API security, software supply-chain security, privacy, IoT security, incident-response automation, and secure software engineering.
- [Research portfolio] (${siteUrl}/en/research)

These are research proposals and work-in-progress concepts, not claims of 13 completed or published papers.

## Credentials
Nine digital credentials issued through Cisco and its learning partners, with public verification records hosted by Credly.
- [Credentials and verification links] (${siteUrl}/en/credentials)

## Official identity and verification
- ORCID: https://orcid.org/0009-0008-1348-5146
- GitHub: https://github.com/arfat-alkamly
- LinkedIn: https://www.linkedin.com/in/arfat-alkamly-399676409
- Credly: https://www.credly.com/users/arfat-alkamly

## Main website sections
- [Home] (${siteUrl}/en)
- [About] (${siteUrl}/en/about)
- [Skills] (${siteUrl}/en/skills)
- [Projects] (${siteUrl}/en/projects)
- [Labs] (${siteUrl}/en/labs)
- [Research] (${siteUrl}/en/research)
- [Credentials] (${siteUrl}/en/credentials)
- [Contact] (${siteUrl}/en/contact)
- [CV] (${siteUrl}/en/cv)

## Content and attribution
Project ownership and contribution statements are described on the relevant project pages. Collaborative work is identified as collaborative. Private system internals, personal contact numbers, and non-public operational details are intentionally excluded.
`;

export function GET() {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
