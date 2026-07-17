import sys
import re

file_path = r"c:\Users\User\Desktop\ProductTrack\app\solutions\manufacturing-process-tracking\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def fix_broken_blocks(lines):
    new_lines = []
    skip_until = -1
    for i, line in enumerate(lines):
        if i <= skip_until:
            continue
        
        # Check for pattern 1 (Why Manufacturing Processes Become Difficult to Track end)
        if i + 3 < len(lines) and "Manufacturing process tracking software eliminates these challenges" in line and "</section>" in lines[i+2] and ")} " in lines[i+3] and "</div>" in lines[i+4]:
             # This is complex, let's just use line numbers from the view_file if they are stable.
             pass

        # Let's use the exact snippets from view_file
        new_lines.append(line)
    
    # Actually, string replacement on the whole content is easier with multi-line strings
    content = "".join(lines)
    
    # Pattern 1 (Line 179-183)
    p1 = r'                                    </section>\n                                \)\}\n                                        </div>\n                                    </section>\n                                \)\}'
    content = re.sub(p1, '                                    </section>\n                                )}', content)
    
    # Pattern 2 (Line 308-312)
    p2 = r'                                    </section>\n                                \)\}\n                                        </div>\n                                    </section>\n                                \)\}'
    content = re.sub(p2, '                                    </section>\n                                )}', content)
    
    # Pattern 3 (Line 355-372)
    p3 = r'                                    </section>\n                                \)\}\n                                                     </div>\n                                                 </div>\n                                                 <div className="col-lg-5">\n                                                     <div className="position-relative p-0 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: \'480px\' }}>\n                                                         <Image src="/assets/images/solutions/digital-shop-traveler.png" alt="Shop Traveler" fill style={{ objectFit: \'cover\' }} className="scale-hover" />\n                                                         <div className="position-absolute bottom-0 start-0 p-5 bg-gradient-to-t from-dark to-transparent w-100 text-left">\n                                                            <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 shadow-2xl">\n                                                                <h4 className="text-white fw-bold mb-0" style={{ fontSize: \'14px\' }}>Digital Shop Traveler View</h4>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                 </div>\n                                             </div>\n                                         </div>\n                                     </section>\n                                \)\}'
    content = re.sub(p3, '                                    </section>\n                                )}', content)
    
    # Pattern 4 (Line 403-407)
    p4 = r'                                    </section>\n                                \)\}\n                                        </div>\n                                    </section>\n                                \)\}'
    content = re.sub(p4, '                                    </section>\n                                )}', content)

    # Note: re.sub might need flags=re.MULTILINE or similar, but with \n in the string it should work if the string is literal enough.
    # Actually, I'll use literal strings without regex for segments to be safe.
    
    return content

content = "".join(lines)

# Target block 1
target1 = '''                                    </section>
                                )}
                                        </div>
                                    </section>
                                )}'''
replacement1 = '''                                    </section>
                                )}'''
content = content.replace(target1, replacement1)

# Target block 2
target2 = '''                                    </section>
                                )}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5">
                                                     <div className="position-relative p-0 rounded-5 overflow-hidden shadow-2xl border-primary-glow" style={{ height: '480px' }}>
                                                         <Image src="/assets/images/solutions/digital-shop-traveler.png" alt="Shop Traveler" fill style={{ objectFit: 'cover' }} className="scale-hover" />
                                                         <div className="position-absolute bottom-0 start-0 p-5 bg-gradient-to-t from-dark to-transparent w-100 text-left">
                                                            <div className="p-3 rounded-4 backdrop-blur-md bg-dark bg-opacity-60 border border-white border-opacity-10 shadow-2xl">
                                                                <h4 className="text-white fw-bold mb-0" style={{ fontSize: '14px' }}>Digital Shop Traveler View</h4>
                                                            </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                )}'''
content = content.replace(target2, replacement1)

# Target block 3 (Integration end)
target3 = '''                                    </section>
                                )}
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-5 text-center">
                                                         <Image src="/assets/images/solutions/wip-monitoring-dashboard.png" alt="WIP Integration" fill style={{ objectFit: 'cover' }} />
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                )}'''
content = content.replace(target3, replacement1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied literal string replacements to fix structural errors.")
