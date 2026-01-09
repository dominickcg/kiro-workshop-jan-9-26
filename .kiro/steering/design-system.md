---
inclusion: always
---

# Task Management System - Design System Rules

## Overview

Este documento define las reglas del sistema de diseño basadas en el análisis completo del diseño de Figma para el Task Management System. Estas reglas deben seguirse durante toda la implementación para mantener consistencia visual y funcional.

## Figma Design Reference

**Base URL:** https://www.figma.com/design/p6DkcwhGo9RasbGJAsR2cX/Personal-Task-Manager-In-Figma--Community-  
**File Key:** `p6DkcwhGo9RasbGJAsR2cX`

### Complete Node Map

| Component | Node ID | Type | Description |
|-----------|---------|------|-------------|
| **Main Canvas** | `0:1` | CANVAS | Task Manager main canvas |
| **Task List Container** | `3:78` | FRAME | List container (1040x960px) |
| **Task Instances** | | | |
| Task Instance 1 | `3:261` | INSTANCE | "Encontrarme con Laura en el café" |
| Task Instance 2 | `3:274` | INSTANCE | "Organizar toma de fotos para la graduación" |
| Task Instance 3 | `3:287` | INSTANCE | "No olvidar llevar el paraguas" |
| Task Instance 4 | `3:300` | INSTANCE | "Diseñar la aplicación web" |
| Task Instance 5 | `3:313` | INSTANCE | "Enviar el status diario por correo" |
| Task Instance 6 | `3:335` | INSTANCE | "Entrenar en casa" |
| Task Instance 7 | `3:350` | INSTANCE | "Planificar el campamento en familia" |
| Task Instance 8 | `3:364` | INSTANCE | "Tomarme más selfies con mi gato" |
| Task Instance 9 | `3:378` | INSTANCE | "Preparar el workshop para este viernes" |
| Task Instance 10 | `3:391` | INSTANCE | "Comprar más naranjas" |
| **UI Text Elements** | | | |
| Header Title | `3:407` | TEXT | "Mis Tareas" |
| Instructions | `3:417` | TEXT | Instructions text |
| **Master Components** | | | |
| Task Component | `3:184` | COMPONENT | Master task component |
| Category - Personal | `3:50` | COMPONENT | Personal category tag |
| Category - Work | `3:52` | COMPONENT | Work category tag |
| Priority - High | `3:58` | COMPONENT | High priority indicator |
| Priority - Medium | `3:60` | COMPONENT | Medium priority indicator |
| Priority - Low | `3:62` | COMPONENT | Low priority indicator |
| Color Palette | `2:24` | COMPONENT | Design system colors |

### Sub-Components (Task Internal Structure)

| Sub-Component | Node ID | Parent | Description |
|---------------|---------|--------|-------------|
| Task Name Section | `3:172` | `3:184` | Left section with icon and title |
| Icon/Image | `3:173` | `3:172` | 50x50px task icon |
| Task Title Text | `3:174` | `3:172` | Task title (540px width) |
| Task Info Section | `3:175` | `3:184` | Right section with metadata |
| Due Date Frame | `3:176` | `3:175` | Date container |
| Due Date Text | `3:177` | `3:176` | Date text |
| Tag Frame | `3:178` | `3:175` | Category tag container |
| Tag Instance | `3:179` | `3:178` | Category tag component |
| Status Frame | `3:180` | `3:175` | Priority container |
| Priority Instance | `3:181` | `3:180` | Priority indicator |

## Design Tokens

### Colors (Extracted from Figma Styles)

```typescript
const colors = {
  // Background colors
  background: {
    primary: '#f3f5f7',    // Main background (light gray-blue)
    card: '#ffffff',       // Task card background (white)
    icon: '#f3f5f7',       // Icon placeholder background
  },
  
  // Text colors
  text: {
    primary: '#26344a',    // Main text color (dark blue-gray)
    secondary: '#26344a',  // Secondary text with 50% opacity
    white: '#ffffff',      // White text for tags
  },
  
  // Priority colors (from Figma components)
  priority: {
    alta: '#fb1856',       // High priority (red) - Node 3:58
    media: '#f2d023',      // Medium priority (yellow) - Node 3:60
    baja: '#259d6e',       // Low priority (green) - Node 3:62
  },
  
  // Category colors (from Figma components)
  category: {
    personal: '#1e6bd6',   // Personal category (blue) - Node 3:50
    trabajo: '#c3b573',    // Work category (brown/gold) - Node 3:52
  }
};
```

### Typography (Extracted from Figma Text Styles)

```typescript
const typography = {
  // Main task title - Style ID: 0576fbea057ad2abc008f81fdc4a6ecc
  taskTitle: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '23.4px',
    letterSpacing: '0px',
    textAlign: 'left',
    color: '#26344a',
  },
  
  // Due date text - Style ID: c58098e6e9284283e42e4df42c22affb
  dueDate: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '23.4px',
    letterSpacing: '0px',
    textAlign: 'right',
    color: '#26344a',
    opacity: 0.5,
  },
  
  // Category tag text - Style ID: 1906990536a939e05ccc55b2d62ad252
  categoryTag: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '23.4px',
    letterSpacing: '0px',
    textAlign: 'left',
    color: '#ffffff',
  }
};
```

### Layout & Spacing (Extracted from Figma Layout Styles)

```typescript
const layout = {
  // Task List Container - Style ID: 782656f3ece3a771c6aa082d080942e8
  taskList: {
    width: '1040px',
    height: '960px',
    background: '#f3f5f7',
    border: '3px solid white',
    borderRadius: '12px',
    padding: '20px',
    gap: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  
  // Task Card - Style ID: 782656f3ece3a771c6aa082d080942e8
  taskCard: {
    width: '1000px',
    height: '83px',
    background: '#ffffff',
    borderRadius: '6px',
    padding: '20px 10px 10px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '234px',
  },
  
  // Task Name Section - Style ID: c78d6151337d71633f575b00a5660234
  taskName: {
    width: '610px',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignItems: 'center',
  },
  
  // Icon/Image - Style ID: 6fe5a48f1dfae20e741c631911f6dd22
  taskIcon: {
    width: '50px',
    height: '50px',
    background: '#f3f5f7',
  },
  
  // Task Title - Style ID: 8e67f5d39b97b3391b6a3311c789d0c0
  taskTitle: {
    width: '540px',
    height: '23px',
  },
  
  // Task Info Section - Style ID: 563086ae2c9b89dd9104bec936284d8e
  taskInfo: {
    width: '296px',
    height: '63px',
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Due Date Container - Style ID: 745c48f58c5349212b21301a101d3ed6
  dueDate: {
    width: '133px',
    height: '43px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
  
  // Category Tag Container - Style ID: 137c6d2c26d24a205ffa48fef92bdeca
  categoryContainer: {
    width: '113px',
    height: '63px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  
  // Category Tag - Personal - Style ID: 4a9766a3c5b552d9ea3315120bd7af44
  categoryTagPersonal: {
    width: '93px',
    height: '43px',
    background: '#1e6bd6',
    borderRadius: '6px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Category Tag - Work - Style ID: 2f4900342a1e3966d2e161f206ef7e46
  categoryTagWork: {
    width: '82px',
    height: '43px',
    background: '#c3b573',
    borderRadius: '6px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Priority Container - Style ID: 4b60bb5183b4e492d07b48460c2cce06
  priorityContainer: {
    width: '40px',
    height: '40px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
  
  // Priority Icon - Style ID: be926cf6054a4eb1576927355c8eeff7
  priorityIcon: {
    width: '20px',
    height: '20px',
  }
};
```

## Component Architecture

### Master Task Component (Node: 3:184)

```typescript
interface TaskProps {
  id: string;
  titulo: string;
  estado: 'pendiente' | 'completada';
  prioridad: 'alta' | 'media' | 'baja';
  fechaCreacion: Date;
  fechaVencimiento?: Date;
  categoria?: 'personal' | 'trabajo';
  icono?: string;
}

// Component hierarchy based on Figma structure:
// TaskCard (3:184)
//   ├── TaskName (3:172)
//   │   ├── IconOrImage (3:173) - 50x50px
//   │   └── TaskTitle (3:174) - 540px width
//   └── TaskInfo (3:175)
//       ├── DueDate (3:176)
//       │   └── DateText (3:177)
//       ├── CategoryTag (3:178)
//       │   └── TagInstance (3:179) - Variants: Personal/Work
//       └── PriorityStatus (3:180)
//           └── PriorityIcon (3:181) - Variants: High/Medium/Low
```

### Category Components

```typescript
// Personal Category (Node: 3:50)
interface PersonalCategoryProps {
  text: 'Personal';
  backgroundColor: '#1e6bd6';
  textColor: '#ffffff';
  width: '93px';
  height: '43px';
}

// Work Category (Node: 3:52)
interface WorkCategoryProps {
  text: 'Trabajo';
  backgroundColor: '#c3b573';
  textColor: '#ffffff';
  width: '82px';
  height: '43px';
}
```

### Priority Components

```typescript
// High Priority (Node: 3:58)
interface HighPriorityProps {
  color: '#fb1856';
  size: '20px';
  shape: 'circle';
}

// Medium Priority (Node: 3:60)
interface MediumPriorityProps {
  color: '#f2d023';
  size: '20px';
  shape: 'circle';
}

// Low Priority (Node: 3:62)
interface LowPriorityProps {
  color: '#259d6e';
  size: '20px';
  shape: 'circle';
}
```

## Visual Design Rules

### Task Cards (Based on Node 3:184)

1. **Background**: Always white (`#ffffff`)
2. **Dimensions**: 1000x83px (fixed)
3. **Border Radius**: 6px
4. **Padding**: 20px left, 10px right, 10px top/bottom
5. **Layout**: Flexbox row, space-between, center aligned
6. **Gap**: 234px between left and right sections

### Priority Indicators (Nodes 3:58, 3:60, 3:62)

**Visual Specifications:**
- **Alta (High)**: Red circle (`#fb1856`) - Node 3:58
- **Media (Medium)**: Yellow circle (`#f2d023`) - Node 3:60
- **Baja (Low)**: Green circle (`#259d6e`) - Node 3:62

**Implementation:**
- Size: 20x20px (exact)
- Shape: Perfect circle (ellipse)
- Position: Right side of task card
- Container: 40x40px with 10px padding

### Category Tags (Nodes 3:50, 3:52)

**Personal Tag (Node 3:50):**
- Background: `#1e6bd6` (blue)
- Text: "Personal" in white
- Dimensions: 93x43px
- Border radius: 6px
- Padding: 10px

**Work Tag (Node 3:52):**
- Background: `#c3b573` (brown/gold)
- Text: "Trabajo" in white
- Dimensions: 82x43px
- Border radius: 6px
- Padding: 10px

### Icons/Images (Node 3:173)

**Specifications:**
- Size: 50x50px (exact)
- Background: `#f3f5f7` (placeholder)
- Position: Left side of task title
- Gap: 20px from title text

## Responsive Design Guidelines

### Breakpoints
```typescript
const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};
```

### Mobile Adaptations
- Scale task card width proportionally
- Maintain aspect ratios from Figma
- Stack task info vertically on smaller screens
- Preserve minimum touch targets (44px)
- Keep visual hierarchy intact

## Implementation Guidelines

### Material-UI Theme Configuration

```typescript
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e6bd6', // Personal category color
    },
    background: {
      default: '#f3f5f7', // Main background
      paper: '#ffffff',   // Card background
    },
    text: {
      primary: '#26344a', // Main text color
    },
    // Custom priority colors
    priority: {
      alta: '#fb1856',
      media: '#f2d023',
      baja: '#259d6e',
    },
    // Custom category colors
    category: {
      personal: '#1e6bd6',
      trabajo: '#c3b573',
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: 18,
    fontWeightMedium: 500,
  },
  components: {
    // Custom component overrides based on Figma specs
    MuiCard: {
      styleOverrides: {
        root: {
          width: '1000px',
          height: '83px',
          borderRadius: '6px',
          padding: '10px 20px 10px 20px',
        },
      },
    },
  },
});
```

### Component Naming Convention

- `TaskCard` - Master task component (Node 3:184)
- `TaskList` - Container component (Node 3:78)
- `TaskIcon` - Icon/image component (Node 3:173)
- `TaskTitle` - Task title component (Node 3:174)
- `TaskInfo` - Right info section (Node 3:175)
- `TaskDueDate` - Due date component (Node 3:176)
- `CategoryTag` - Category components (Nodes 3:50, 3:52)
- `PriorityIcon` - Priority components (Nodes 3:58, 3:60, 3:62)

## Figma Integration

### Automated Access Configuration

```typescript
const FIGMA_CONFIG = {
  fileKey: 'p6DkcwhGo9RasbGJAsR2cX',
  baseUrl: 'https://www.figma.com/design/p6DkcwhGo9RasbGJAsR2cX/Personal-Task-Manager-In-Figma--Community-',
  
  // Main structure nodes
  nodes: {
    canvas: '0:1',
    taskList: '3:78',
    headerTitle: '3:407',
    instructions: '3:417',
  },
  
  // Master components
  components: {
    task: '3:184',
    categoryPersonal: '3:50',
    categoryWork: '3:52',
    priorityHigh: '3:58',
    priorityMedium: '3:60',
    priorityLow: '3:62',
    colorPalette: '2:24',
  },
  
  // Task instances (for testing)
  taskInstances: [
    '3:261', '3:274', '3:287', '3:300', '3:313',
    '3:335', '3:350', '3:364', '3:378', '3:391'
  ],
  
  // Sub-components
  subComponents: {
    taskName: '3:172',
    taskIcon: '3:173',
    taskTitle: '3:174',
    taskInfo: '3:175',
    dueDate: '3:176',
    dueDateText: '3:177',
    tagFrame: '3:178',
    tagInstance: '3:179',
    statusFrame: '3:180',
    priorityInstance: '3:181',
  }
};
```

### MCP Commands for Development

```typescript
// Get complete task component
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:184")

// Get task list container
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:78")

// Get category components
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:50") // Personal
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:52") // Work

// Get priority components
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:58") // High
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:60") // Medium
get_design_context(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:62") // Low

// Take screenshots for validation
get_screenshot(fileKey="p6DkcwhGo9RasbGJAsR2cX", nodeId="3:78")
```

## Development Workflow

1. **Design Sync**: Use MCP commands to fetch latest design updates
2. **Component Mapping**: Map React components to specific Figma node IDs
3. **Style Extraction**: Extract exact measurements and colors from Figma
4. **Visual Validation**: Compare implementation with Figma screenshots
5. **Responsive Testing**: Ensure mobile adaptations maintain design integrity

## Quality Assurance

### Figma Compliance Checklist

- [ ] All colors match exact hex values from Figma styles
- [ ] Typography matches IBM Plex Sans specifications
- [ ] Component dimensions match Figma measurements exactly
- [ ] Border radius values are consistent (6px cards, 6px tags)
- [ ] Spacing and padding match layout styles
- [ ] Priority colors are correctly mapped to variants
- [ ] Category colors match component specifications
- [ ] Icon sizes are exactly 50x50px and 20x20px
- [ ] Layout flexbox properties match Figma auto-layout
- [ ] Responsive behavior preserves visual hierarchy

### Code Quality Standards

- Use exact Figma node IDs in data attributes for tracking
- Implement TypeScript interfaces matching Figma component properties
- Follow Material-UI patterns while preserving Figma specifications
- Maintain component hierarchy matching Figma structure
- Document all Figma style IDs in CSS comments
- Write tests that validate visual specifications