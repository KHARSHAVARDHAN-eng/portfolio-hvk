import { personalInfo, projects, skillCategories, openSourceContributions, milestones } from '../../data/portfolioData';

export interface CommandResponse {
  type: 'text' | 'html' | 'clear' | 'matrix';
  content: string;
}

/**
 * Process raw terminal user input string and resolve structured CommandResponse.
 * @param cmd Raw shell command input string
 * @returns Structured CommandResponse object
 */
export const processCommand = (cmd: string): CommandResponse => {
  const cleanCmd = cmd.trim().toLowerCase();

  switch (cleanCmd) {
    case 'help':
      return {
        type: 'text',
        content: `Available System Commands:
---------------------------
whoami       - Display developer profile & position
projects     - List featured AI case studies & GraphRAG engines
skills       - View technical skills & frameworks
opensource   - Inspect open-source contributions & stats
experience   - View academic & research milestones
contact      - Get direct communication links
resume       - View resume link
matrix       - [EASTER EGG] Trigger Matrix digital rain
sudo         - [EASTER EGG] Attempt superuser privilege
clear        - Clear terminal screen
help         - Show this menu`
      };

    case 'whoami':
      return {
        type: 'text',
        content: `K. Harshavardhan
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Status: ${personalInfo.status}

Bio: ${personalInfo.bio}`
      };

    case 'projects':
      return {
        type: 'text',
        content: projects.map((p, i) => `[0${i + 1}] ${p.title} (${p.category})
     ${p.subtitle}
     Tech: ${p.techStack.join(', ')}
     Repo: ${p.githubUrl}\n`).join('\n')
      };

    case 'skills':
      return {
        type: 'text',
        content: skillCategories.map(cat => `=== ${cat.title} ===
  - ${cat.skills.map(s => `${s.name} (${s.level}%)`).join('\n  - ')}\n`).join('\n')
      };

    case 'opensource':
      return {
        type: 'text',
        content: openSourceContributions.map(o => `* ${o.title} [${o.role}]
  Repo: ${o.repo}
  Stars: ${o.stars || 'N/A'}
  Desc: ${o.description}\n`).join('\n')
      };

    case 'experience':
      return {
        type: 'text',
        content: milestones.map(m => `* ${m.title} @ ${m.organization} (${m.period})
  ${m.description}`).join('\n\n')
      };

    case 'contact':
      return {
        type: 'text',
        content: `Email: ${personalInfo.socials.email}
GitHub: ${personalInfo.socials.github}
LinkedIn: ${personalInfo.socials.linkedin}`
      };

    case 'resume':
      return {
        type: 'text',
        content: `Resume Available at: ${personalInfo.socials.resume}`
      };

    case 'sudo':
      return {
        type: 'text',
        content: `[ACCESS DENIED] User 'guest' is not in the sudoers file. This incident will be reported to Harshavardhan's neural log.`
      };

    case 'matrix':
      return {
        type: 'matrix',
        content: 'INITIATING_MATRIX_DIGITAL_RAIN_PROTOCOL...'
      };

    case 'clear':
      return {
        type: 'clear',
        content: ''
      };

    case '':
      return {
        type: 'text',
        content: ''
      };

    default:
      return {
        type: 'text',
        content: `bash: command not found: '${cmd}'. Type 'help' for available commands.`
      };
  }
};
